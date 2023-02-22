import {TasksListProps} from "./TasksList.props";
import styles from "./TasksList.module.css";
import cn from "classnames";
import React from "react";
import {TaskModel} from "../../localStorage";
import {Task} from "../Task/Task";


export const TasksList = ({className, tasks, setTaskTitle, ...props}: TasksListProps): JSX.Element => {
    return(
        <div className={cn(className, styles.tasks)} {...props}>
            {tasks.map((el: TaskModel) => (
                <Task className="task"
                      setTaskTitle={setTaskTitle}
                      taskTitle={el.title} isDone={el.done} id={(el.id).toString()} key={el.id}/>
            ))}
        </div>
    );
};