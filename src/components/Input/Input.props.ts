import {DetailedHTMLProps, HTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    error?: FieldError;
    background: boolean;
    checked?: boolean;
    value?: string;
    readonly?: boolean;
    reference?: any;
}