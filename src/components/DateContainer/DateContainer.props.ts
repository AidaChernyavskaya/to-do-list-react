import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface DateContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    day: number;
    weekday: string;
    month: string;
    empty: boolean;
    active: boolean;
}