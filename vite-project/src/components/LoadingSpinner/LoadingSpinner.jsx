import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ size = 'medium' }) => {
  return (
    <div className={`${styles.spinner} ${styles[size]}`}>
      <div className={styles.dot1}></div>
      <div className={styles.dot2}></div>
      <div className={styles.dot3}></div>
    </div>
  );
};

export default LoadingSpinner;