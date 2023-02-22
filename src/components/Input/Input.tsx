import {InputProps} from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";


export const Input = ({error, checked, background, className, value, readonly, reference, ...props}: InputProps): JSX.Element => {
    return(
        <div className={cn(className, styles.input__wrapper)}>
            <input className={cn(styles.input, {
                [styles.background_gray]: background,
                [styles.background_none]: !background,
                [styles.checked]: checked,
                [styles.error]: error
            })} value={value} ref={reference} type={"text"} readOnly={readonly} {...props}/>
            {error && <span className={styles.error__message}>{error.message}</span>}
        </div>
    );
};