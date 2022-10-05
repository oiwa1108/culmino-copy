import { SeminarCards } from '@components/SeminarCards';

export function Seminar() {
  const seminarCards = [
    {
      id: '1',
      name: 'インストラクター1',
      avg_rating: 0,
      sex: 'string',
      icon_img_url: 'https://picsum.photos/200',
      hitokoto: 'ダミー',
      self_introduction: 'ダミー',
      sns_link: 'https://example.com/',
      specialty: 'ダミーダミー',
    },
    {
      id: '2',
      name: 'インストラクター2',
      avg_rating: 0,
      sex: 'string',
      icon_img_url: 'https://picsum.photos/200',
      hitokoto: 'ダミー',
      self_introduction: 'ダミー',
      sns_link: 'https://example.com/',
      specialty: 'ダミーダミー',
    },
  ];

  return <SeminarCards seminarCards={seminarCards} />;
}
