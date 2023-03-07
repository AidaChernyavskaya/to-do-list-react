import {DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction} from "react";

export interface CalendarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    currentDate: Date;
    startDate: Date;
    setCurrentDate: Dispatch<SetStateAction<Date>>;
    setStartDate: Dispatch<SetStateAction<Date>>;
}