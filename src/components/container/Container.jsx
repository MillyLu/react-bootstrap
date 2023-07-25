import styles from './index.module.css';

export function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
