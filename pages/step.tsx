import styles from '../styles/step.module.css';
import Header from '../src/components/header';
import Head from '../src/components/head';

export default function Step() {
  return (
    <>
      <Head />
      <Header />
      <div className={styles.container}>
        <div className={styles.item}>
          <h2>1.募集する</h2>
        </div>
        <div className={styles.item}>
          <h2>2.応募する</h2>
        </div>
        <div className={styles.item}>
          <h2>3.メッセージ</h2>
        </div>
        <div className={styles.item}>
          <h2>4.会う</h2>
        </div>
        <div className={styles.item}>
          <h2>5.評価する</h2>
        </div>
      </div>
      <div className={styles.bottomTitle}>
        <h1>簡単ステップ</h1>
      </div>
    </>
  );
}
