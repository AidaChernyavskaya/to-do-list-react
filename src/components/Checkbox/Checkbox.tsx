import {CheckboxProps} from "./Checkbox.props";
import styles from "./Checkbox.module.css";
import cn from "classnames";


export const Checkbox = ({className, ...props}: CheckboxProps): JSX.Element => {
    return(
        <label className={cn(className, styles.wrapper)} htmlFor={"check"} {...props}>
            <input
                type={"checkbox"}
                className={styles.checkbox}
                id={"check"}
            />
            <span className={styles.checkmark}></span>
        </label>
    );
};