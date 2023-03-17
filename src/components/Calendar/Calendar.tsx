import {CalendarProps} from "./Calendar.props";
import styles from "./Calendar.module.css";
import cn from "classnames";
import {Button} from "../Button/Button";
import {DateContainer} from "../DateContainer/DateContainer";
import React, {useCallback, useEffect, useState} from "react";
import getDate from "date-fns/getDate";
import getISODay from 'date-fns/getISODay';
import getMonth from 'date-fns/getMonth';
import {generateKeyByDate, getJSONFromStorage} from "../../localStorage";


export const DAY_MILLISECONDS = 24*60*60*1000;

export const createDays = (startDate: Date, daysCount: number): Array<Date> => {

    const daysArray: Array<Date> = [];
    for (let i = 0; i < daysCount; i++){
        daysArray[i] = new Date(startDate.getTime() + i * DAY_MILLISECONDS);
    }
    return daysArray;
};

export const calculateDaysCount = (widthContainer: number): number => {
    const WIDTH_DATE_ELEM = 80;
    return Math.floor(widthContainer / WIDTH_DATE_ELEM);
};

export const Calendar = ({startDate, setStartDate, currentDate, setCurrentDate, className, ...props}: CalendarProps): JSX.Element => {
    const WEEKDAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const MONTHS = [
        'Январь', 'Февраль', 'Март',
        'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь',
        'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    const [days, setDays] = useState<Array<Date>>([]);
    const [daysCount, setDaysCount] = useState<number>(0);
    // const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        const datesContainerElem = document.getElementById("datesContainer");
        if (datesContainerElem) {
            new ResizeObserver(resizeListener).observe(datesContainerElem);
        }
    }, []);

    useEffect(() => {
        setDays(createDays(startDate, daysCount));
    }, [daysCount, startDate]);

    const resizeListener = (): void => {
        const datesContainerElem = document.getElementById("datesContainer");
        if (datesContainerElem){
            setDaysCount(calculateDaysCount(datesContainerElem.offsetWidth));
        }
    };

    const changeStartDate = (delta: number): void => {
        setStartDate(new Date(startDate.getTime() + delta * DAY_MILLISECONDS));
    };

    const setPreviousDate = (): void => {
        changeStartDate(-1);
        // setLoaded(false);
    };

    const setNextDate = (): void => {
        changeStartDate(1);
        // setLoaded(false);
    };


    // const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    //     if(event.key === 'ArrowLeft'){
    //         setPreviousDate();
    //     }
    //     if (event.key === 'ArrowRight'){
    //         setNextDate();
    //     }
    // };

    // useEffect( () => {
    //     if (loaded) {
    //         console.log('here');
    //         return;
    //     }
    //     document.addEventListener('keydown', function (event){
    //         if(event.key === 'ArrowLeft'){
    //             setPreviousDate();
    //         }
    //         if (event.key === 'ArrowRight'){
    //             setNextDate();
    //         }
    //     });
    //     setLoaded(true);
    // }, [setPreviousDate, setNextDate, loaded]);

    const isActive = (day: Date): boolean => {
        const dateFirst: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        const dateSecond: Date = new Date(day.getFullYear(), day.getMonth(), day.getDate());
        return dateFirst.getTime() === dateSecond.getTime();
    };

    const changeCurrentDate = (day: Date): void => {
        setCurrentDate(day);
    };

    // const btn = document.getElementById('btn');onKeyDown={handleKeyPress}
    // btn && btn.focus();

    return(
        <div className={cn(className, styles.calendar__container)} {...props}>
            <Button icon={'arrowLeft'} appearance={'ghost'} onClick={setPreviousDate}/>
            <div className={styles.calendar} id={"datesContainer"}>
                {days.map((day, index) => (
                    <DateContainer
                        day={getDate(day)}
                        weekday={WEEKDAYS[getISODay(day)-1]}
                        month={MONTHS[getMonth(day)]}
                        empty={getJSONFromStorage(generateKeyByDate(day)).length == 0}
                        active={isActive(day)}
                        key={index}
                        onClick={(): void => {changeCurrentDate(day);}}
                    />
                ))}
            </div>
            <Button icon={'arrowRight'} appearance={'ghost'} onClick={setNextDate} />
        </div>
    );
};