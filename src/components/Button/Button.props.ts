import {DetailedHTMLProps, HTMLAttributes} from "react";
import arrowRight from "./arrowRight.svg";
import arrowLeft from "./arrowLeft.svg";
import close from "./close.svg";
import plus from "./plus.svg";
import del from "./delete.svg";
import drag from "./drag.svg";
import edit from "./edit.svg";

export const icons = {
    arrowLeft,
    arrowRight,
    close,
    plus,
    del,
    drag,
    edit
};

export type IconName = keyof typeof icons;

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    icon: IconName;
    appearance: 'ghost' | 'gray';
}