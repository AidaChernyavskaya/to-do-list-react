import {InputProps} from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";


export const Input = ({error, background, className, ...props}: InputProps): JSX.Element => {
    return(
        <div className={cn(className, styles.input__wrapper)}>
            <input className={cn(styles.input, {
                [styles.background_gray]: background,
                [styles.background_none]: !background,
                [styles.error]: error
            })} {...props}/>
            {error && <span className={styles.error__message}>{error.message}</span>}
        </div>
    );
};