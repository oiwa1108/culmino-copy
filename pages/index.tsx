import Head from '../src/components/head';
import styles from '../styles/Home.module.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Header from '../src/components/header';
import News from '../src/components/news';
import Footer from '../src/components/footer';

export default function Home() {
  return (
    <div className={styles.all}>
      <Head />
      <Header />
      <a href="/login" className={styles.start}>
        <Button bg="#f7c6bd" textColor="white" _hover={{ bg: '#ff6c94' }}>
          はじめる
        </Button>
      </a>
      <img src="/image/top1.png" />
      <div className={styles.newsContainer}>
        <h2 className={styles.newsTitle}>お知らせ</h2>
        <News date="2022.10.22" contents="CULMINOアプリリリース" />
        <News date="2022.10.01" contents="クラウドファンディング開始" />
        <News date="2022.08.23" contents="CULMINO株式会社設立" />
      </div>
      <Footer />
    </div>
  );
}
