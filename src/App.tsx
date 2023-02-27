import React, {useState} from 'react';
import './App.css';
import {Add, Calendar, currentDate, TasksList} from "./components";
import {
    generateKeyByDate,
    getCurrentId,
    getJSONFromStorage,
    setValueToStorage,
    TaskModel,
    updateJSONInStorage
} from "./localStorage";


function App() {
    const key = generateKeyByDate(currentDate);
    const [tasks, setTasks] = useState<Array<TaskModel>>(getJSONFromStorage(key));
    const addToTask = (title: string): void => {
        const currentId = getCurrentId();
        const task = new TaskModel(title, Number(currentId), false);
        const key = generateKeyByDate(currentDate);
        const newTasks = [...tasks, task]; // ??
        updateJSONInStorage(key, newTasks);
        setValueToStorage('currentId', currentId);
        setTasks(newTasks);
    };

    const deleteTask = (id: number): void => {
        const newTasks = [...tasks];
        newTasks.splice(newTasks.findIndex((el) => (el.id == id)), 1);
        setTasks(newTasks);
        updateJSONInStorage(key, newTasks);
    };

    const setTaskTitle = (id: number, newTitle: string): void => {
        tasks.map(el => {
            if (el.id == id) {
                el.title = newTitle;
            }
        });
        updateJSONInStorage(key, tasks);
    };

    return (
        <div className="app__container">
            <Add addToTasks={addToTask} className='add'/>
            <Calendar className="calendar"/>
            <TasksList tasks={tasks} setTaskTitle={setTaskTitle} deleteTask={deleteTask} className="tasks_list"/>
        </div>
    );
}

export default App;
