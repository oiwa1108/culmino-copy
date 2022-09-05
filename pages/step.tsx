import styles from '../styles/step.module.css';
import Header from '../src/components/header';
import Head from '../src/components/head';

export default function Step() {
  return (
    <div className={styles.all}>
      <Head />
      <Header />
      <div className={styles.container}>
        <div className={styles.item}>
          <p>1.募集する</p>
          <img src="/image/step1.svg" className={styles.pic} />
        </div>
        <div className={styles.item}>
          <p>2.応募する</p>
          <img src="/image/step2.svg" className={styles.pic} />
        </div>
        <div className={styles.item}>
          <p>3.メッセージ</p>
          <img src="/image/step3.svg" className={styles.pic} />
        </div>
        <div className={styles.item}>
          <p>4.会う</p>
          <img src="/image/step4.svg" className={styles.pic} />
        </div>
        <div className={styles.item}>
          <p>5.評価する</p>
          <img src="/image/step5.svg" className={styles.pic} />
        </div>
      </div>
      <div className={styles.bottomTitle}>
        <p>簡単ステップ</p>
      </div>
    </div>
  );
}
