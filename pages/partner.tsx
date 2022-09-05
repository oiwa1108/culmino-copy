import Head from "../src/components/head";
import Header from "../src/components/header";
import styles from '../styles/partner.module.css';


export default function partner() {
  return (
    <div className={styles.all}>
      <Head />
      <Header />
      <div className={styles.container}>
        <p className={styles.title}>セックスって実は...♡</p>
        <p className={styles.contents}>セックスパートナーって聞くとあなたはどう思いますか？<br />
          「遊んでる」「ビッチ」というイメージが先行しますか？</p>
        <p className={styles.contents}>知っておいて欲しい！セックスの力って実はとても偉大なんです。</p>
        <p className={styles.contents}>まず、カラダにとても良き。<br />
          体を動かすことで血行が良くなるので、頭痛が改善されることがあります。
          汗も出てくるので肌を重ね合い健康を維持するのにも有効みたいです。
          そして、歳を取ってもセックスを楽しむことによって若々しさを保つことにつながるとされています。
          スポーツ以上に運動量が多いこともあるので、適度な疲労感からぐっすりと眠りにつける効果も期待できます。
          睡眠のリズムが整うと結果的に睡眠の質も上げて女性は肌が綺麗になるということもよくあります。</p>
        <p className={styles.contents}>つぎに、ココロにとても良き。<br />
          セックスに期待される１つにストレス解消があります。
          楽しんで行為を行うと癒されてリラックスできたり気分がスッキリして不安が減るなどと言われています。
          また、セックスライフが充実していると、精神的にも身体的にも満たされているので、
          常にエネルギッシュでポジティブなオーラが出ている場合が多いです。</p>
        <p className={styles.contents}>定期的なセックスは、カラダにもココロにもメリットだらけです。
          セックスをすることで、さらに人生が豊かになるといっても過言ではありません。</p>
        <p className={styles.contents}>もっと素晴らしいセックスライフを…</p>
      </div>
      <div className={styles.bottomTitle}>
        <p>パートナー探し</p>
      </div>
    </div>
  )
}

