import {ButtonProps, icons} from "./Button.props";
import styles from "./Button.module.css";
import {HandySvg} from "handy-svg";
import cn from "classnames";


export const Button = ({icon, appearance, className, ...props}: ButtonProps): JSX.Element => {
    const IconComp =icons[icon];

    return(
        <button
            className={cn(styles.button, className, {
                [styles.ghost]: appearance == 'ghost',
                [styles.gray]: appearance == 'gray'
            })}
            {...props}
        >
            <HandySvg
                src={IconComp}
            />
        </button>
    );
};