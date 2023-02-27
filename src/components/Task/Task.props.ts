import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface TaskProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    taskTitle: string;
    isDone?: boolean;
    setTaskTitle: any;
    deleteTask: any;
}