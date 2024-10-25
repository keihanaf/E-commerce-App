import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

function PageNotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>4<span className={styles.zero}>0</span>4</h1>
            <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className={styles.homeLink}>Back to Home</Link>
        </div>
    )
}

export default PageNotFound;
