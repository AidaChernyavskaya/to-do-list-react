import {TaskProps} from "./Task.props";
import styles from "./Task.module.css";
import cn from "classnames";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {Checkbox} from "../Checkbox/Checkbox";


export const Task = ({task, isDone, className, ...props}: TaskProps): JSX.Element => {
    return(
        <div className={cn(className, styles.task__container)} {...props}>
            <Button icon={'drag'} appearance={'ghost'}/>
            <Input background={false} placeholder={task}/>
            <Button icon={'edit'} appearance={'ghost'}/>
            <Button icon={'del'} appearance={'ghost'}/>
            <Checkbox/>
        </div>
    );
};