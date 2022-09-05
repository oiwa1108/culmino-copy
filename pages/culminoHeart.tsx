import Head from "../src/components/head";
import Header from "../src/components/header";
import styles from '../styles/partner.module.css';


export default function culminoHeart() {
  return (
    <div className={styles.all}>
      <Head />
      <Header />
      <div className={styles.container}>
        <p className={styles.title}>セックス イズ ビューティフル </p>
        <p className={styles.contents}>「セックス 」<br />
          皆さんはこの言葉にどんな印象がありますか？<br />
          性的な表現は周りから嫌がられ、きちんとした性教育は教えられない。
          私たちもこのculminoを立ち上げる際に、いま一度 "性" についてとても考えさせられました。
          なんで「お腹すいた」「眠い」は許されるのに「セックスしたい」は大声で言えないものなのか。
          特に女性はセックスに対して良くないイメージを抱えていることが多いです。</p>
        <p className={styles.contents}>…けど考えてみて。<br />
          相手にとってあなたがとても魅力的に映ってる証拠です。
          こんなに愛を感じることができて、自信が持てて、幸福感でいっぱいになれる行為、
          素敵じゃない?セックス＝エロではありません。
          信頼あるパートナーと体を交わらせることで性的快感だけでなく、求めてもらえる・
          受け入れてもらえる精神的満足感、そして生きてていいんだという自己肯定感が得られます。
          血も繋がっていない他人にうけいれてもらえるってとても尊いことなのです。</p>
        <p className={styles.contents}>CULMINOではどうやったら皆さんにもっとセックスを楽しんでもらえるか、
          どうやったら安心して出会いを楽しんでもらえるかをいま現在も必死に考えています。</p>
        <p className={styles.contents}>いままで自信が無かった自分を少しでも好きになってもらえるよう、
          もっと人生を楽しんでもらえるよう皆さんに寄り添っていきます。<br />
          オンリーワンのセックスプラットフォームとして…</p>
        <p className={styles.contents}>みなさんのセックスライフが素晴らしいものになりますように</p>
      </div>
      <div className={styles.bottomTitle}>
        <p>CULMINOの想い</p>
      </div>
    </div>
  )
}

