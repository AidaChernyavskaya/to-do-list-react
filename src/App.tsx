import React, {useEffect, useState} from 'react';
import './App.css';
import {Add, Calendar,TasksList} from "./components";
import {
    generateKeyByDate,
    getCurrentId,
    getJSONFromStorage,
    setValueToStorage,
    TaskModel,
    updateJSONInStorage
} from "./localStorage";


export const currentDate = new Date();

function App() {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [startDate, setStartDate] = useState<Date>(new Date());
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

    const markAsDone = (id: number): void => { // todo toggleDone
        const newTasks = [...tasks];
        newTasks.map(el => {
            if (el.id == id) {
                el.done = !el.done;
            }
        });
        updateJSONInStorage(key, newTasks);
        setTasks(newTasks);
    };

    const updateTasks = (newTasks: Array<TaskModel>): void => {
        setTasks(newTasks);
        updateJSONInStorage(generateKeyByDate(currentDate), newTasks);
    };

    useEffect(() => {
        setTasks(getJSONFromStorage(generateKeyByDate(currentDate)));
    }, [currentDate]);

    return (
        <div className="app__container">
            <Add addToTasks={addToTask} className='add'/>
            <Calendar
                className="calendar"
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                startDate={startDate}
                setStartDate={setStartDate}
            />
            <TasksList
                tasks={tasks}
                setTaskTitle={setTaskTitle}
                deleteTask={deleteTask}
                markAsDone={markAsDone}
                className="tasks_list"
                updateTasks={updateTasks}
            />
        </div>
    );
}

export default App;
