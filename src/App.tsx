import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Ptag} from "./components";

function App() {
  return (
    <div className="App">
        <Ptag size={"b"} color={"black"}>Hello big black</Ptag>
        <Ptag size={"m"} color={"gray"}>Hello medium gray</Ptag>
        <Ptag size={"s"} color={"blue"}>Hello small blue</Ptag>
    </div>
  );
}

export default App;
