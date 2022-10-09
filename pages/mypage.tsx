import Head from '../src/components/head';
import styles from '../styles/mypage.module.scss';
import { BottomNavi } from '@components/BottomNavi';
import { Avatar, Rating, Link, Box, List, ListItem } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function MyPage() {
  const mypageMenu = [
    { href: '#', title: 'プロフィール編集' },
    { href: '#', title: 'コイン' },
    { href: '#', title: 'トレーニング履歴' },
    { href: '#', title: 'トレーニングレポート' },
    { href: '#', title: '課金履歴' },
    { href: '#', title: 'インストラクター' },
    { href: '#', title: '問い合わせ' },
    { href: '#', title: 'Culminoについて' },
    { href: '#', title: 'ログアウト' },
  ];

  const mypageMenuItems = mypageMenu.map((item, index) => {
    return (
      <ListItem key={index} className={styles.mypage_item}>
        <Link href="#" className={styles.mypage_link} underline="none">
          {item.title}
          <KeyboardArrowRightIcon className={styles.mypage_arrow} />
        </Link>
      </ListItem>
    );
  });

  return (
    <>
      <Head />
      <Box className={styles.mypage}>
        <Box className={styles.mypage_profile}>
          <Box className={styles.mypage_avatarWrap}>
            <Avatar
              alt=""
              src="https://picsum.photos/200"
              sx={{ width: 120, height: 120 }}
            />
          </Box>
          <Link href="" className={styles.mypage_name} underline="none">
            <span>
              名前が入ります
              <KeyboardArrowRightIcon className={styles.mypage_nameArrow} />
            </span>
          </Link>
          <Box className={styles.mypage_ratingWrap} sx={{ mt: 1 }}>
            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
            <Link href="" sx={{ ml: 1 }}>
              22
            </Link>
          </Box>
        </Box>
        <List>{mypageMenuItems}</List>
        <BottomNavi _type="mypage" />
      </Box>
    </>
  );
}
