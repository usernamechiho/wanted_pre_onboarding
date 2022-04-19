import React, { useState } from 'react';
import styles from '../styles/Toggle.module.css';

const Toggle = () => {
    const [checked, setChecked] = useState(true);

    const changeCheckState = () => {
        setChecked(!checked);
    };

    return (
        <>
            <h3>Toggle</h3>
            <label className={styles.container}>
                <input type="checkbox" onClick={changeCheckState} />
                <span className={styles.ball}></span>

                <div>
                    <span className={checked && styles.default}>기본</span>
                    <span className={!checked && styles.detail}>상세</span>
                </div>
            </label>
        </>
    );
};

export default Toggle;
