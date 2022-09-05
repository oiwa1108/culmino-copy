import styles from '../styles/safety.module.css';
import Header from '../src/components/header';
import Head from '../src/components/head';

export default function Step() {
  return (
    <div className={styles.all}>
      <Head />
      <Header />
      <div className={styles.container}>
        <div className={styles.item}>
          <p>1.本人確認</p>
          <img src="/image/safety1.svg" className={styles.pic} />
          <p className={styles.contents}>ひとりひとり目視で<br />本人確認をおこなっています </p>
        </div>
        <div className={styles.item}>
          <p>2.性病検査確認</p>
          <img src="/image/safety2.svg" className={styles.pic} />
          <p className={styles.contents}>半年に1回の性病検査の義務付け<br />公的書類の提出をお願いしてます</p>
        </div>
        <div className={styles.item}>
          <p>3.違反報告</p>
          <img src="/image/safety3.svg" className={styles.pic} />
          <p className={styles.contents}>ユーザーの違反を見つけた時は<br />違反報告をしましょう</p>
        </div>
        <div className={styles.item}>
          <p>4.強制停止</p>
          <img src="/image/safety4.svg" className={styles.pic} />
          <p className={styles.contents}>不正利用者は強制退会を<br />強いられます</p>
        </div>
      </div>
      <div className={styles.bottomTitle}>
        <p>安心安全</p>
      </div>
    </div>
  );
}
