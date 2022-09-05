import Head from "../src/components/head";
import Header from "../src/components/header";
import styles from '../styles/feature.module.css';
import Link from "next/link";

export default function aboutFunction() {
  return (
    <div className={styles.all}>
      <Head />
      <Header />
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.title}>webアプリのダウンロード</p>
          <p className={styles.contents}>ダウンロードの仕方は
            <Link href="#"><a className={styles.there}>こちら</a></Link></p>
        </div>
        <div className={styles.box}>
          <p className={styles.title}>ポイント</p>
          <p className={styles.contents}>マッチングした数によってランクがあります。<br />
            上位ランクとのマッチングにポイントが消化、<br />
            下位ランクとのマッチングにポイントが付与されます。<br />
            ランクについて詳しくは<Link href="#"><a className={styles.there}>こちら</a></Link></p>
        </div>
        <div className={styles.box}>
          <p className={styles.title}>友達紹介</p>
          <p className={styles.contents}>友達2人紹介でスタンダードコイン(SDC)3万円分<br />
            ※自身の招待コードで登録する必要あり</p>
        </div>
      </div>
      <div className={styles.bottomTitle}>
        <p>機能について</p>
      </div>
    </div>
  )
}

