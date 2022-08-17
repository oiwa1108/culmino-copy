import styles from './style.module.css';

export default function News(props) {
  return (
    <div className={styles.item}>
      <p>{props.date}</p>
      <a href="#" className={styles.contents}>
        {props.contents}
      </a>
    </div>
  );
}
