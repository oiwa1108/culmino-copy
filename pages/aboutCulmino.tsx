import Link from "next/link";
import Head from "../src/components/head";
import Header from "../src/components/header";
import styles from '../styles/aboutCulmino.module.css';


export default function aboutCulmino(){
  return(
    <div className={styles.all}>
      <Head/>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>セックスを愛する全ての方へ</h2>
        <p className={styles.contents}>…culminoは性をテーマとして<br/>童貞・処女の卒業や<br/>パートナー探しを目的としたアプリです</p>
        <ul className={styles.list}>
          <Link href="/guraduation"><a><li className={styles.li}>&#10003;童貞・処女の卒業</li></a></Link>  {/* リンク先「guraduation」 */}
          <Link href="/partner"><a><li className={styles.li}>&#10003;パートナー探し</li></a></Link>    {/* リンク先「partner」 */}
          <Link href="/culminoHeart"><a><li className={styles.li}>…CULMINOの想い</li></a></Link>       {/* リンク先「culminoHeart」 */}
        </ul>
        <img src="/image/culminoについて.svg"
          alt="CULMINOについて"
          className={styles.logo}/>
        <div className={styles.bottomTitle}>
          <h1>CULMINOについて</h1>
        </div>
      </div>
      
    </div>
  )
}

