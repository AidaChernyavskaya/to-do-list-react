import {DetailedHTMLProps, HTMLAttributes} from "react";
import arrowRight from "./images/arrowRight.svg";
import arrowLeft from "./images/arrowLeft.svg";
import close from "./images/close.svg";
import plus from "./images/plus.svg";
import del from "./images/delete.svg";
import drag from "./images/drag.svg";
import edit from "./images/edit.svg";
import tick from "./images/tick.svg";

export const icons = {
    arrowLeft,
    arrowRight,
    close,
    plus,
    del,
    drag,
    edit,
    tick
};

export const labelNames = {
    arrowLeft: 'previous day',
    arrowRight: 'next day',
    close: 'do not save changes',
    plus: 'add new task',
    del: 'delete task',
    drag: 'drag and drop for a task',
    edit: 'edit task',
    tick: 'save changes'
};

export type IconName = keyof typeof icons;

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    icon: IconName;
    appearance: 'ghost' | 'gray';
}