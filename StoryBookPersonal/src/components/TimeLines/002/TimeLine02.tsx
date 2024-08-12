import React from 'react';
import styles from './ParallelDivs.module.css';

const ParallelDivs: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.divA}>Div A</div>
            <div className={styles.divB}>Div B</div>
        </div>
    );
};

export default ParallelDivs;