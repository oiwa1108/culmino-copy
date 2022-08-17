import Head from '../src/components/head';
import BottomNavi from './BottomNavi';
import SimpleTabs from './SimpleTabs';
import styles from '../styles/HomeTab.module.css';

export default function MatchTab() {
  return (
    <div className={styles.all}>
      <Head />
      <SimpleTabs labels={['募集・応募', 'セミナー', 'ランキング']}>
        <div>募集・応募</div>
        <div>セミナー</div>
        <div>ランキング</div>
      </SimpleTabs>
      <BottomNavi />
    </div>
  );
}
