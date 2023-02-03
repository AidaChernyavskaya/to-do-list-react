import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Input, Ptag} from "./components";

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
    </div>
  );
}

export default App;
