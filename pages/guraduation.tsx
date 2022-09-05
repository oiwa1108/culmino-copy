import Head from "../src/components/head";
import Header from "../src/components/header";
import styles from '../styles/guraduation.module.css';


export default function guraduation() {
  return (
    <div className={styles.all}>
      <Head />
      <Header />
      <div className={styles.container}>
        <p className={styles.title}>マッチングアプリってモテる人のためのもの？</p>
        <p className={styles.contents}>出会いが欲しいけど、マッチングアプリってレベルが高い<br />
          そもそもマッチングもしないし見た目にも自信がない。<br />
          それだけどお店で卒業するのはまたなんか違う気がする…</p>
        <p className={styles.contents}>そんな未経験な方へ「卒業する」ためにCULMINOがあります。</p>
        <p className={styles.contents}>友達にはからかわれるし周りには相談できないハナシ<br />
          未経験であることは恥ずかしい事でもなんでもなくそれだけ自分向き合ってきた誇るべき勲章です⭐︎</p>
        <p className={styles.contents}>そんな皆さんの大事な機会をお預かりして「卒業することで自信をつけてもらう」のが私たちの役割です。</p>
        <p className={styles.contents}>女性も男性もに言えますが、卒業すると物事に積極的になれたり劣等感がなくなります。
          そして、行動を起こした自分を認めて褒めることによって色々なことにチャレンジしたくなったり何より人生がさらに充実していきます。</p>
        <p className={styles.contents}>まだまだ人生には色々な事が待っています。</p>
        <p className={styles.contents}>一皮むけるための "culmino"<br />
          そんな存在になれたら嬉しいです。</p>
      </div>
      <div className={styles.bottomTitle}>
        <p>童貞・処女の卒業</p>
      </div>
    </div>
  )
}

