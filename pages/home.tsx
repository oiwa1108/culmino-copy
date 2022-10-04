import Head from '../src/components/head';
import { BottomNavi } from '@components/BottomNavi';
import { MenuTab } from '@components/MenuTab';
import styles from '../styles/HomeTab.module.css';
import { Seminar } from '@components/Seminar';

export default function MatchTab() {
  return (
    <div className={styles.all}>
      <Head />
      <MenuTab labels={['募集・応募', 'セミナー']}>
        <div>募集・応募</div>
        <Seminar />
      </MenuTab>
      <BottomNavi _type="home" />
    </div>
  );
}
