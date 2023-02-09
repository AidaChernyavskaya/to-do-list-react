import {CalendarProps} from "./Calendar.props";
import styles from "./Calendar.module.css";
import cn from "classnames";
import {Button} from "../Button/Button";
import {DateContainer} from "../DateContainer/DateContainer";
import React from "react";


export const Calendar = ({className, ...props}: CalendarProps): JSX.Element => {
    return(
        <div className={cn(className, styles.calendar__container)} {...props}>
            <Button icon={'arrowLeft'} appearance={'ghost'}/>
            <div className={styles.calendar}>
                <DateContainer day={15} weekday={'чт'} month={"Декабрь"} empty={true} active={true}/>
                <DateContainer day={15} weekday={'чт'} month={"Декабрь"} empty={false} active={false}/>
                <DateContainer day={15} weekday={'чт'} month={"Декабрь"} empty={true} active={false}/>
                <DateContainer day={15} weekday={'чт'} month={"Декабрь"} empty={true} active={false}/>
                <DateContainer day={15} weekday={'чт'} month={"Декабрь"} empty={true} active={false}/>
                <DateContainer day={15} weekday={'чт'} month={"Декабрь"} empty={false} active={false}/>
                <DateContainer day={15} weekday={'чт'} month={"Декабрь"} empty={true} active={false}/>
                <DateContainer day={15} weekday={'чт'} month={"Декабрь"} empty={true} active={false}/>
            </div>
            <Button icon={'arrowRight'} appearance={'ghost'}/>
        </div>
    );
};