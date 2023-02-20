import {DetailedHTMLProps, HTMLAttributes} from "react";
import {TaskModel} from "../../localStorage";

export interface AddProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>{
    addToTasks: any;
}