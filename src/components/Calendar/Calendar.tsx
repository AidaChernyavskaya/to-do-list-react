import {CalendarProps} from "./Calendar.props";
import styles from "./Calendar.module.css";
import cn from "classnames";
import {Button} from "../Button/Button";
import {DateContainer} from "../DateContainer/DateContainer";
import React from "react";
import getDate from "date-fns/getDate";
import getISODay from 'date-fns/getISODay';
import getMonth from 'date-fns/getMonth';
import {currentDate} from "../../App";

export const createDays = (startDate: Date): Array<Date> => {
    const daysArray: Array<Date> = [];
    for (let i = 0; i < 10; i++){
        daysArray[i] = new Date();
        daysArray[i].setDate(startDate.getDate() + i);
    }
    return daysArray;
};

export const Calendar = ({className, ...props}: CalendarProps): JSX.Element => {
    const days: Array<Date> = createDays(currentDate);
    console.log(currentDate, 'currentDate');
    const weekdays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return(
        <div className={cn(className, styles.calendar__container)} {...props}>
            <Button icon={'arrowLeft'} appearance={'ghost'}/>
            <div className={styles.calendar}>
                {days.map((day, index) => (
                    <DateContainer
                        day={getDate(day)}
                        weekday={weekdays[getISODay(day)-1]}
                        month={months[getMonth(day)]}
                        empty={true}
                        active={false}
                        key={index}
                    />
                ))}
            </div>
            <Button icon={'arrowRight'} appearance={'ghost'}/>
        </div>
    );
};