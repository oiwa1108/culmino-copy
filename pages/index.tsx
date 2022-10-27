import Head from '../src/components/head';
import styles from '../styles/Home.module.css';
import { Fab } from '@mui/material';
import Header from '../src/components/header';
import News from '../src/components/news';
import Footer from '../src/components/footer';

export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <Fab
        variant="extended"
        color="primary"
        href="/login"
        sx={{
          position: 'fixed',
          left: 'auto',
          zIndex: '1',
          marginTop: '530px',
          marginLeft: '270px',
          borderRadius: '10px 10px 10px 10px',
        }}
      >
        はじめる
      </Fab>
      <img src="/image/top1.png" className={styles.smartPhoneImg} />
      <div className={styles.newsContainer}>
        <h2 className={styles.newsTitle}>お知らせ</h2>
        <News date="2022.10.22" contents="CULMINOアプリリリース" />
        <News date="2022.10.01" contents="クラウドファンディング開始" />
        <News date="2022.08.23" contents="CULMINO株式会社設立" />
      </div>
      <Footer />
    </>
  );
}
