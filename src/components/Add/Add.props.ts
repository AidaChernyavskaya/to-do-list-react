import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface AddProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>{
    addToTasks: (title: string)=>void;
}