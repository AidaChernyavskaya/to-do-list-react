import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CheckboxProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    taskId: string | undefined;
    checked: boolean;
}