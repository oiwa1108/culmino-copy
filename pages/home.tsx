import Head from '../src/components/head';
import { BottomNavi } from '@components/BottomNavi';
import { MenuTab } from '@components/MenuTab';
import { Seminar } from '@components/Seminar';

export default function MatchTab() {
  return (
    <>
      <Head />
      <MenuTab labels={['募集・応募', 'セミナー']}>
        <div>募集・応募</div>
        <Seminar />
      </MenuTab>
      <BottomNavi _type="home" />
    </>
  );
}
