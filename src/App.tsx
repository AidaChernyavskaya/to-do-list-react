import React from 'react';
import './App.css';
import {Button, Checkbox, Input, Ptag, DateContainer, Task, Add, Calendar, TasksList} from "./components";
import getDate from "date-fns/getDate";
import getISODay from 'date-fns/getISODay';
import getMonth from 'date-fns/getMonth';
import {inspect} from "util";


function App() {
    // const date = new Date();
    // const weekdays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    // const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return (
        <div className="app__container">
            <Add className='add'/>
            <Calendar className="calendar"/>
            {/*<DateContainer day={getDate(date)} weekday={weekdays[getISODay(date)]} month={months[getMonth(date)]} empty={true} active={true}/>*/}

            <TasksList className="tasks_list"/>

        </div>
    );
}

export default App;
