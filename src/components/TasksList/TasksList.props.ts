import {DetailedHTMLProps, HTMLAttributes} from "react";
import {TaskModel} from "../../localStorage";

export interface TasksListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    tasks: Array<TaskModel>;
    setTaskTitle: (id: number, newTitle: string)=>void;
    deleteTask: (id: number)=>void;
    toggleDone: (id: number)=>void;
    updateTasks: (newTasks: Array<TaskModel>)=>void;
}