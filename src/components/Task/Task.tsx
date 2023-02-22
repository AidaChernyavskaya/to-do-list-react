import {TaskProps} from "./Task.props";
import styles from "./Task.module.css";
import cn from "classnames";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {Checkbox} from "../Checkbox/Checkbox";
import React, {useEffect, useRef, useState} from "react";

export const Task = ({task, isDone, id, className, ...props}: TaskProps): JSX.Element => {
    const [editable, setEditable] = useState<boolean>(true);
    const [title, setTitle] = useState<string>(task);
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
            console.log('enter press here! ');
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