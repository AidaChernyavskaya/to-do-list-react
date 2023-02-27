import {TaskProps} from "./Task.props";
import styles from "./Task.module.css";
import cn from "classnames";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {Checkbox} from "../Checkbox/Checkbox";
import React, {useEffect, useRef, useState} from "react";


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
        setEditable(false);
    };

    const handleEdit = (event: any): void => {
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

    const handleKeyPress = (event: any): void => {
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
        console.log("aab");
        markAsDone(id);
    };

    if (!editable){
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
                <Button icon={'tick'} appearance={'ghost'} onClick={confirmChanges}/>
                <Button icon={'close'} appearance={'ghost'} onClick={declineChanges}/>
                <Checkbox taskId={id} checked={isDone} onClick={handleMarkAsDone}/>
            </div>
        );
    } else {
        return(
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
                <Button icon={'edit'} appearance={'ghost'} onClick={onEditActivate}/>
                <Button icon={'del'} appearance={'ghost'} onClick={handleDelete}/>
                <Checkbox taskId={id} checked={isDone} onClick={handleMarkAsDone}/>
            </div>
        );
    }

};