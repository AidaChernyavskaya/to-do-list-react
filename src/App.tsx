import React from 'react';
import './App.css';
import {Button, Checkbox, Input, Ptag, DateContainer, Task, Add} from "./components";
import getDate from "date-fns/getDate";
import getISODay from 'date-fns/getISODay';
import getMonth from 'date-fns/getMonth';


function App() {
    const date = new Date();
    const weekdays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return (
        <div className="App">
            <Ptag size={"b"} color={"black"}>Hello big black</Ptag>
            <Ptag size={"m"} color={"gray"}>Hello medium gray</Ptag>
            <Ptag size={"s"} color={"blue"}>Hello small blue</Ptag>

            <Input
                background={true}
                placeholder={"Введите задачу"}
            />
            <Input
                background={false}
                placeholder={"HERE IS task written"}
            />
            <Input
                background={false}
                placeholder={"task"}
                checked={true}
            />

            <Button icon={"plus"} appearance={'gray'}/>
            <Button icon={"del"} appearance={'ghost'}/>
            <Button icon={"arrowLeft"} appearance={'ghost'}/>
            <Button icon={"arrowRight"} appearance={'ghost'}/>
            <Button icon={"drag"} appearance={'ghost'}/>
            <Button icon={"edit"} appearance={'ghost'}/>
            <Button icon={"close"} appearance={'ghost'}/>

            <Checkbox/>
            <DateContainer day={getDate(date)} weekday={weekdays[getISODay(date)]} month={months[getMonth(date)]} empty={true} active={true}/>
            <DateContainer day={15} weekday={'чт'} month={"Декабрь"} empty={false} active={false}/>

            <Task task={'read'}/>
            <Add/>
        </div>
  );
}

export default App;
