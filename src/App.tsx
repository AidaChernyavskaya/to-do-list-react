import React from 'react';
import './App.css';
import {Button, Input, Ptag} from "./components";

function App() {
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

        <Button icon={"plus"} appearance={'gray'}/>
        <Button icon={"del"} appearance={'ghost'}/>
        <Button icon={"arrowLeft"} appearance={'ghost'}/>
        <Button icon={"arrowRight"} appearance={'ghost'}/>
        <Button icon={"drag"} appearance={'ghost'}/>
        <Button icon={"edit"} appearance={'ghost'}/>
        <Button icon={"close"} appearance={'ghost'}/>
    </div>
  );
}

export default App;
