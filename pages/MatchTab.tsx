import Head from '../src/components/head';
import BottomNavi from './BottomNavi';
import SimpleTabs from './SimpleTabs';
import styles from '../styles/MatchTab.module.css';

export default function MatchTab() {
  return (
    <div className={styles.all}>
      <Head />
      <SimpleTabs labels={['募集', '応募', 'マッチング中']}>
        <div>募集の時の相手一覧</div>
        <div>応募した時の相手一覧</div>
        <div>マッチング中の相手一覧</div>
      </SimpleTabs>
      <BottomNavi />
    </div>
  );
}
