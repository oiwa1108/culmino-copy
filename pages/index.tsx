import Head from '../src/components/head';
import styles from '../styles/Home.module.css';
import { Fab, Box } from '@mui/material';
import Header from '../src/components/header';
import News from '../src/components/news';
import Footer from '../src/components/footer';

export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <Box
        sx={{
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto',
          padding: 1,
          textAlign: 'right',
          position: 'fixed',
          bottom: '20%',
          zIndex: 1,
        }}
      >
        <Fab
          variant="extended"
          color="primary"
          href="/login"
          sx={{ borderRadius: '10px' }}
        >
          はじめる
        </Fab>
      </Box>
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
