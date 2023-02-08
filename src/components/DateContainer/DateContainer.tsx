import {DateContainerProps} from "./DateContainer.props";
import styles from "./DateContainer.module.css";
import cn from "classnames";
import {Ptag} from "../Ptag/Ptag";


export const DateContainer = ({day, weekday, month, empty, active, className, ...props}: DateContainerProps): JSX.Element => {
    return(
        <div className={cn(className, styles.date, {
            [styles.full]: !empty,
            [styles.active]: active
        })} {...props}>
            <Ptag size={'m'} color={'blue'} className={styles.day}>{day}</Ptag>
            <Ptag size={'s'} color={'blue'} className={styles.weekday}>{weekday}</Ptag>
            <Ptag size={'s'} color={'blue'} className={styles.month}>{month}</Ptag>
        </div>
    );
};