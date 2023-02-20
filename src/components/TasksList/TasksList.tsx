import {TasksListProps} from "./TasksList.props";
import styles from "./TasksList.module.css";
import cn from "classnames";
import React from "react";
import {generateKeyByDate, getJSONFromStorage} from "../../localStorage";
import {currentDate} from "../Add/Add";
import {Task} from "../Task/Task";

// export const showTasks = (taskElem: any): JSX.Element => {
//     return <Task className="task" task={taskElem.title} isDone={taskElem.done} id={taskElem.id}/>;
// };
//
// export const showCurrentDayTasks = ():void => {
//     const key = generateKeyByDate(currentDate);
//     const tasks = getJSONFromStorage(key);
//     tasks.forEach((i: number) => showTasks(tasks[i]));
// };

export const TasksList = ({className, ...props}: TasksListProps): JSX.Element => {
    const key = generateKeyByDate(currentDate);
    const tasks = getJSONFromStorage(key);

    return(
        <div className={cn(className, styles.tasks)} {...props}>
            {tasks.map((el: any) => (
                <Task className="task" task={el.title} isDone={el.done} id={el.id} key={el.id}/>
            ))}
        </div>
    );
};