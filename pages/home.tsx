import Head from '../src/components/head';
import { BottomNavi } from '@components/BottomNavi';
import { MenuTab } from '@components/MenuTab';
import styles from '../styles/HomeTab.module.css';

export default function MatchTab() {
  return (
    <div className={styles.all}>
      <Head />
      <MenuTab labels={['募集・応募', 'セミナー', 'ランキング']}>
        <div>募集・応募</div>
        <div>セミナー</div>
        <div>ランキング</div>
      </MenuTab>
      <BottomNavi _type="home" />
    </div>
  );
}
