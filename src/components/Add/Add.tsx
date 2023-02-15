import {AddProps} from "./Add.props";
import styles from "./Add.module.css";
import cn from "classnames";
import {Input} from "../Input/Input";
import React, {useEffect, useState} from "react";
import {Button} from "../Button/Button";


class Task {
    title: string;
    done: boolean;
    id: number;

    constructor(taskTitle: string, taskId: number, taskDone: boolean) {
        this.title = taskTitle;
        this.id = taskId;
        this.done = taskDone;
    }
}

export const Add = ({className, ...props}: AddProps): JSX.Element => {
    const [title, setTitle] = useState<string>();
    const handleChange = (event: any): void => {
        setTitle(event.target.value);
    };

    const onAddTask = (event: any): void => {
        event.preventDefault();
        if (title) {
            const task = new Task(title, 1, false);
            console.log(task);
            localStorage.setItem("task_" + new Date(), JSON.stringify(task));
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