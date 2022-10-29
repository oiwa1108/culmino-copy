import Head from '../src/components/head';
import { BottomNavi } from '@components/BottomNavi';
import { MenuTab } from '@components/MenuTab';

export default function MatchTab() {
  return (
    <>
      <Head />
      <MenuTab labels={['募集', '応募', 'マッチング中']}>
        <div>募集の時の相手一覧</div>
        <div>応募した時の相手一覧</div>
        <div>マッチング中の相手一覧</div>
      </MenuTab>
      <BottomNavi _type="match" />
    </>
  );
}
