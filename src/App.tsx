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
    // setTasks([]);
    const addToTask = (title: string): void => {
        const currentId = getCurrentId();
        const task = new TaskModel(title, Number(currentId), false);
        const key = generateKeyByDate(currentDate);
        const newTasks = [...tasks, task]; // ??
        updateJSONInStorage(key, newTasks);
        setValueToStorage('currentId', currentId);
        setTasks(newTasks);
    };

    return (
        <div className="app__container">
            <Add addToTasks={addToTask} className='add'/>
            <Calendar className="calendar"/>
            <TasksList tasks={tasks} className="tasks_list"/>
        </div>
    );
}

export default App;
