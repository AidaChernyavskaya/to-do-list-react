import {PtagProps} from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";


export const Ptag = ({children, size = 'm', color = 'blue', className, ...props}: PtagProps): JSX.Element => {
    return(
        <p
            className={cn(styles.p, className, styles[size], styles[color])}
            {...props}
        >
            {children}
        </p>
    );
};