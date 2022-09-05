import Head from "../src/components/head";
import Header from "../src/components/header";
import styles from '../styles/recess.module.css';

export default function recess() {
  return (
    <div className={styles.all}>
      <Head />
      <Header />
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.title}>休会 (一時停止)</p>
          <p className={styles.contents}>アカウントを残したまま一時休会となります。<br />
            定期課金設定を止められます。<br />
            ランクやポイントはそのまま残ります。</p>
          <p className={styles.contents}>休会しても無料会員として<br />
            掲示板の応募と募集を観覧することができます。</p>
        </div>
        <div className={styles.box}>
          <p className={styles.title}>退会</p>
          <p className={styles.contents}>culminoのアカウントを退会すると、<br />
            退会したアカウントへログインできなくなり、<br />
            お客様のプロフィールは誰からも<br />
            閲覧できない状態になります。</p>
          <p className={styles.contents}>現在のランクやポイントも失効となります。</p>
          <p className={styles.contents}>アカウントを残したまま支払いを止めたい場合は<br />
            休会にてお手続きください。</p>
        </div>
      </div>
      <div className={styles.bottomTitle}>
        <p>休会について</p>
      </div>
    </div>
  )
}

