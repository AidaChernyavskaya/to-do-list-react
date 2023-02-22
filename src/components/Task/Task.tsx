import {TaskProps} from "./Task.props";
import styles from "./Task.module.css";
import cn from "classnames";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {Checkbox} from "../Checkbox/Checkbox";
import React, {useEffect, useRef, useState} from "react";


export const Task = ({taskTitle, isDone, id, className, setTaskTitle, ...props}: TaskProps): JSX.Element => {
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

    const handleKeyPress = (event: any): void => {
        if(event.key === 'Enter'){
            if (title){
                setTaskTitle(id, title);
                setEditable(true);
            } else {console.log('wrong input');}
        }
    };

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
            />
            <Button icon={'edit'} appearance={'ghost'} onClick={onEditActivate}/>
            <Button icon={'del'} appearance={'ghost'}/>
            <Checkbox/>
        </div>
    );
};