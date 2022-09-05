import Head from "../src/components/head";
import Header from "../src/components/header";
import styles from '../styles/feature.module.css';

export default function aboutFunction() {
  return (
    <div className={styles.all}>
      <Head />
      <Header />
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.title}>仮会員<br />0円(税込) /30日</p>
          <p className={styles.contents}>募集・応募が見れます</p>
        </div>
        <div className={styles.box}>
          <p className={styles.title}>正会員<br />16,500円(税込) /30日</p>
          <p className={styles.contents}>募集・応募・メッセージ等の全ての機能が使えます</p>
        </div>
      </div>
      <div className={styles.bottomTitle}>
        <p>料金</p>
      </div>
    </div>
  )
}

