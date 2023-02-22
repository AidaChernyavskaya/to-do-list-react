import {AddProps} from "./Add.props";
import styles from "./Add.module.css";
import cn from "classnames";
import {Input} from "../Input/Input";
import React, {useEffect, useState} from "react";
import {Button} from "../Button/Button";


export const currentDate = new Date();

export const Add = ({className, addToTasks, ...props}: AddProps): JSX.Element => {
    const [title, setTitle] = useState<string>('');
    const handleChange = (event: any): void => {
        setTitle(event.target.value);
    };

    const onAddTask = (event: any): void => {
        event.preventDefault();
        if (title) {
            addToTasks(title);
            setTitle('');
        }
    };

    return(
        <form
            className={cn(className, styles.add__container)}
            {...props}
        >
            <Input
                background={true}
                placeholder={"Введите задачу"}
                onChange={handleChange}
                value={title}
                readonly={false}
            />
            <Button icon={"plus"} appearance={'gray'} onClick={onAddTask}/>
        </form>
    );
};