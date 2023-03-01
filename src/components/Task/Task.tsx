import {TaskProps} from "./Task.props";
import styles from "./Task.module.css";
import cn from "classnames";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {Checkbox} from "../Checkbox/Checkbox";
import React, {ChangeEvent, MouseEventHandler, useEffect, useRef, useState} from "react";


export const Task = ({taskTitle, isDone, id, className, setTaskTitle, deleteTask, markAsDone, ...props}: TaskProps): JSX.Element => {
    const [editable, setEditable] = useState<boolean>(true);
    const [title, setTitle] = useState<string>(taskTitle);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [editable]);

    const onEditActivate = (): void => {
        if (!isDone) {
            setEditable(false);
        }
    };

    const handleEdit = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
    };

    const confirmChanges = (): void => {
        if (title){
            setTaskTitle(id, title);
            setEditable(true);
        } else {console.log('wrong input');}
    };

    const declineChanges = (): void => {
        setTitle(taskTitle);
        setEditable(true);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if(event.key === 'Enter'){
            confirmChanges();
        }
        if (event.key === 'Escape'){
            declineChanges();
        }
    };

    const handleDelete = (): void => {
        deleteTask(id);
    };

    const handleMarkAsDone = (): void => {
        markAsDone(id);
    };


    let iconFirst: 'tick' | 'edit';
    let iconSecond: 'close' | 'del';
    let onClickFirst: MouseEventHandler<HTMLButtonElement>;
    let onClickSecond: MouseEventHandler<HTMLButtonElement>;
    if (!editable){
        iconFirst = 'tick';
        iconSecond = 'close';
        onClickFirst = confirmChanges;
        onClickSecond = declineChanges;
    } else {
        iconFirst = 'edit';
        iconSecond = 'del';
        onClickFirst = onEditActivate;
        onClickSecond = handleDelete;
    }

    return (
        <div className={cn(className, styles.task__container)} {...props}>
            <Button icon={'drag'} appearance={'ghost'}/>
            <Input
                background={false}
                value={title}
                onChange={handleEdit}
                readonly={editable}
                onKeyDown={handleKeyPress}
                reference={inputRef}
                checked={isDone}
            />
            <Button icon={iconFirst} appearance={'ghost'} onClick={onClickFirst}/>
            <Button icon={iconSecond} appearance={'ghost'} onClick={onClickSecond}/>
            <Checkbox taskId={id} checked={isDone} onClick={handleMarkAsDone}/>
        </div>
    );

};