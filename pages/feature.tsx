import Head from "../src/components/head";
import Header from "../src/components/header";
import styles from '../styles/feature.module.css';
import Link from "next/link";


export default function feature(){
  return(
    <div className={styles.all}>
      <Head/>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>1.応募・募集</h2>
        <p className={styles.contents}>自分の都合が良い日にち、時間、場所で募集。<br/>
        応募があった相手の中からマッチングする相手を選びます。<br/>
        メッセージで日程調整をしなくて良いから効率よく出会える。</p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>2.評価制度</h2>
        <p className={styles.contents}>会った後に相手を「良かった」「悪かった」で評価。<br/>
        ビジネス勧誘、売春行為、ロマンス詐欺などが起こらないようユーザーが安心に使える制度。<br/>
        評価はプロフィールの星数に反映します。</p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>3.ランク</h2>
        <p className={styles.contents}>CULMINOでは、独自のランクを設けています。<br/>
        ランクについて詳しくは<Link href="#"><a className={styles.there}>こちら</a></Link></p>
      </div>
      <div className={styles.bottomTitle}>
        <h1>特徴</h1>
      </div>      
    </div>
  )
}

