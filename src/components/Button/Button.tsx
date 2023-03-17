import {ButtonProps, icons, labelNames} from "./Button.props";
import styles from "./Button.module.css";
import {HandySvg} from "handy-svg";
import cn from "classnames";


export const Button = ({icon, appearance, className, ...props}: ButtonProps): JSX.Element => {
    const IconComp =icons[icon];
    const LabelName = labelNames[icon];

    return(
        <button
            className={cn(styles.button, className, {
                [styles.ghost]: appearance == 'ghost',
                [styles.gray]: appearance == 'gray'
            })}
            aria-label={LabelName}
            {...props}
        >
            <HandySvg
                src={IconComp}
            />
        </button>
    );
};