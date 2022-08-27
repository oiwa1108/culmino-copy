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
          <h2>1.本人確認</h2>
          <img src="/image/安心安全1.svg" className={styles.pic}/>
          <p className={styles.contents}>ひとりひとり目視で<br/>本人確認をおこなっています </p>
        </div>
        <div className={styles.item}>
          <h2>2.性病検査確認</h2>
          <img src="/image/安心安全2.svg" className={styles.pic}/>
          <p className={styles.contents}>半年に1回の性病検査の義務付け<br/>公的書類の提出をお願いしてます</p>
        </div>
        <div className={styles.item}>
          <h2>3.違反報告</h2>
          <img src="/image/安心安全3.svg" className={styles.pic}/>
          <p className={styles.contents}>ユーザーの違反を見つけた時は<br/>違反報告をしましょう</p>
        </div>
        <div className={styles.item}>
          <h2>4.強制停止</h2>
          <img src="/image/安心安全4.svg" className={styles.pic}/>
          <p className={styles.contents}>不正利用者は強制退会を<br/>強いられます</p>
        </div>
      </div>
      <div className={styles.bottomTitle}>
        <h1>安心安全</h1>
      </div>
    </div>
  );
}
