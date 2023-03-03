import {CalendarProps} from "./Calendar.props";
import styles from "./Calendar.module.css";
import cn from "classnames";
import {Button} from "../Button/Button";
import {DateContainer} from "../DateContainer/DateContainer";
import React, {useEffect, useState} from "react";
import getDate from "date-fns/getDate";
import getISODay from 'date-fns/getISODay';
import getMonth from 'date-fns/getMonth';
import {generateKeyByDate, getJSONFromStorage} from "../../localStorage";

export const createDays = (startDate: Date, daysCount: number): Array<Date> => {
    const daysArray: Array<Date> = [];
    for (let i = 0; i < daysCount; i++){
        daysArray[i] = new Date();
        daysArray[i].setDate(startDate.getDate() + i);
    }
    return daysArray;
};

export const calculateDaysCount = (widthContainer: number): number => {
    const WIDTH_DATE_ELEM = 80;
    return Math.floor(widthContainer / WIDTH_DATE_ELEM);
};

export const Calendar = ({startDate, setStartDate, setTasks, currentDate, setCurrentDate, className, ...props}: CalendarProps): JSX.Element => {
    const WEEKDAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const MONTHS = [
        'Январь', 'Февраль', 'Март',
        'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь',
        'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    const [days, setDays] = useState<Array<Date>>([]);

    useEffect(() => {
        const datesContainerElem = document.getElementById("datesContainer");
        if (datesContainerElem) {
            new ResizeObserver(resizeListener).observe(datesContainerElem);
        }
    }, []);

    const resizeListener = (): void => {
        const datesContainerElem = document.getElementById("datesContainer");
        if (datesContainerElem){
            const daysCount = calculateDaysCount(datesContainerElem.offsetWidth);
            setDays(createDays(currentDate, daysCount));
        }
    };

    const setPreviousDate = (): void => {
        const previous = currentDate;
        previous.setDate(previous.getDate() - 1);
        console.log(previous);
        setCurrentDate(previous);
        resizeListener();
        setTasks(getJSONFromStorage(generateKeyByDate(currentDate)));
    };

    const setNextDate = (): void => {
        const next = currentDate;
        next.setDate(next.getDate() + 1);
        console.log(next);
        setCurrentDate(next);
        resizeListener();
        setTasks(getJSONFromStorage(generateKeyByDate(currentDate)));
    };

    // const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    //     if(event.key === 'ArrowLeft'){
    //         setPreviousDate();
    //     }
    //     if (event.key === 'ArrowRight'){
    //         setNextDate();
    //     }
    // };

    return(
        <div className={cn(className, styles.calendar__container)} {...props}>
            <Button icon={'arrowLeft'} appearance={'ghost'} onClick={setPreviousDate} />
            <div className={styles.calendar} id={"datesContainer"} >
                {days.map((day, index) => (
                    <DateContainer
                        day={getDate(day)}
                        weekday={WEEKDAYS[getISODay(day)-1]}
                        month={MONTHS[getMonth(day)]}
                        empty={true}
                        active={false}
                        key={index}
                    />
                ))}
            </div>
            <Button icon={'arrowRight'} appearance={'ghost'} onClick={setNextDate}/>
        </div>
    );
};