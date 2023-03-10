import {TasksListProps} from "./TasksList.props";
import styles from "./TasksList.module.css";
import cn from "classnames";
import React, {useRef, useState} from "react";
import {TaskModel} from "../../localStorage";
import {Task} from "../Task/Task";


export const TasksList = ({className, tasks, updateTasks, setTaskTitle, deleteTask, markAsDone, ...props}: TasksListProps): JSX.Element => {
    const [idNumber, setIDNumber] = useState<number>(0);
    const dragItem = useRef<number>(0);
    const dragOverItem = useRef<number>(0);

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, id: number, index: number): void => {
        console.log('work' + event.clientY + '   ' + id);
        setIDNumber(id);
        dragItem.current = index;
    };

    const handleDragEnter = (event: React.DragEvent<HTMLDivElement>, index: number): void => {
        event.preventDefault();
        dragOverItem.current = index;
    };

    const handleDragEnd = (event: React.DragEvent<HTMLDivElement>): void => {
        console.log('drop' + event.clientY);
        setIDNumber(0);
        const copyTasks = [...tasks];
        const dragItemContent = copyTasks[dragItem.current];
        copyTasks.splice(dragItem.current, 1);
        copyTasks.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = 0;
        dragOverItem.current = 0;
        console.log(copyTasks);
        updateTasks(copyTasks);
    };

    return(
        <div className={cn(className, styles.tasks)} {...props} >
            {tasks.map((el: TaskModel, index) => (
                <Task className={cn("task", idNumber == el.id ? styles.selected : '')}
                      setTaskTitle={setTaskTitle}
                      deleteTask={deleteTask}
                      markAsDone={markAsDone}
                      taskTitle={el.title}
                      isDone={el.done}
                      id={(el.id).toString()}
                      key={el.id}
                      draggable={"true"}
                      onDragStart={(event):void => {handleDragStart(event, el.id, index);}}
                      onDragOver={(event): void => {handleDragEnter(event, index);}}
                      onDragEnd={handleDragEnd}
                />
            ))}
        </div>
    );
};