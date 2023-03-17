import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface TaskProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    taskTitle: string;
    isDone: boolean;
    setTaskTitle: (id: number, newTitle: string)=>void;
    deleteTask: (id: number)=>void;
    toggleDone: (id: number)=>void;
}