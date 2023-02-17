import {AddProps} from "./Add.props";
import styles from "./Add.module.css";
import cn from "classnames";
import {Input} from "../Input/Input";
import React, {useEffect, useState} from "react";
import {Button} from "../Button/Button";
import {
    generateKeyByDate,
    getJSONFromStorage,
    setValueToStorage,
    updateJSONInStorage,
    getCurrentId,
    Task
} from "../../localStorage";


const currentDate = new Date();

export const Add = ({className, ...props}: AddProps): JSX.Element => {
    const [title, setTitle] = useState<string>();
    const handleChange = (event: any): void => {
        setTitle(event.target.value);
    };

    const onAddTask = (event: any): void => {
        event.preventDefault();
        if (title) {
            const currentId = getCurrentId();
            const task = new Task(title, Number(currentId), false);
            console.log(task);
            const key = generateKeyByDate(currentDate);
            const tasks = getJSONFromStorage(key);
            tasks.push(task);
            updateJSONInStorage(key, tasks);
            setValueToStorage('currentId', currentId);
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
            />
            <Button icon={"plus"} appearance={'gray'} onClick={onAddTask}/>
        </form>
    );
};