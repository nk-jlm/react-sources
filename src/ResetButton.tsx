import React from "react";
import styles from './Button.module.css'
export const ResetButton = ({reset}: {reset:() => void}) => {
    return (
        <button type="button" className={styles.reset} onClick={reset}>Reset</button>
    )
}
