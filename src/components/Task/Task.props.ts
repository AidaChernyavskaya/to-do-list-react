import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface TaskProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    task: string;
    isDone?: boolean;
}