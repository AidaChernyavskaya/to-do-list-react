import {DetailedHTMLProps, HTMLAttributes} from "react";
import {TaskModel} from "../../localStorage";

export interface TasksListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    tasks: Array<TaskModel>;
    setTaskTitle: (id: number, newTitle: string)=>void;
    deleteTask: (id: number)=>void;
    markAsDone: (id: number)=>void;
}