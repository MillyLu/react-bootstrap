import styles from './index.module.css';

export function PostItem({ id, title, description }) {
  return (
    <tr className={styles.item}>
      <td className={styles.item_id}>{id}</td>
      <td className={styles.item_title}>{title}</td>
      <td className={styles.item_body}>{description}</td>
    </tr>
  );
}
