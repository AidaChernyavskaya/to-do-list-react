import {AddProps} from "./Add.props";
import styles from "./Add.module.css";
import cn from "classnames";
import {Input} from "../Input/Input";
import React from "react";
import {Button} from "../Button/Button";


export const Add = ({className, ...props}: AddProps): JSX.Element => {
    return(
        <div className={cn(className, styles.add__container)}>
            <Input background={true} placeholder={"Введите задачу"}/>
            <Button icon={"plus"} appearance={'gray'}/>
        </div>
    );
};