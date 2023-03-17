import {AddProps} from "./Add.props";
import styles from "./Add.module.css";
import cn from "classnames";
import {Input} from "../Input/Input";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "../Button/Button";

export const Add = ({className, addToTasks, ...props}: AddProps): JSX.Element => {
    const [title, setTitle] = useState<string>('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
        // setEditableAdd(true);
    };

    const onAddTask = (event: FormEvent): void => {
        event.preventDefault();
        if (title) {
            addToTasks(title);
            setTitle('');
            // setEditableAdd(false);
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