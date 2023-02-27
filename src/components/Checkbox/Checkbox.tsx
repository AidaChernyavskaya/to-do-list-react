import {CheckboxProps} from "./Checkbox.props";
import styles from "./Checkbox.module.css";
import cn from "classnames";
import {useState} from "react";


export const Checkbox = ({className, checked, taskId, ...props}: CheckboxProps): JSX.Element => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const handleChange = (): void => {
        setIsChecked(!isChecked);
    };

    return(
        <label className={cn(className, styles.wrapper)} htmlFor={'check'+taskId} >
            <input
                type={"checkbox"}
                className={styles.checkbox}
                id={'check'+taskId}
                checked={isChecked}
                onChange={handleChange}
                {...props}
            />
            <span className={styles.checkmark}></span>
        </label>
    );
};