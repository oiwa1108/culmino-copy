import Head from '../src/components/head';
import { BottomNavi } from '@components/BottomNavi';
import styles from '../styles/HomeTab.module.css';

export default function MyPage() {
  return (
    <div className={styles.all}>
      <Head />
      マイページ
      <BottomNavi _type="mypage" />
    </div>
  );
}
