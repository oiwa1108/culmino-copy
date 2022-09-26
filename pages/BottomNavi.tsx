import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useRouter } from 'next/router';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function BottomNavi(props) {
  const router = useRouter();
  const classes = useStyles();
  const [value, setValue] = React.useState(router.pathname.slice(1) || './'); // アクセス時のURLを解析して、適切なナビゲーションボタンをアクティブにする。

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={async (event, newValue) => {
          setValue(newValue);
          router.push(newValue);
        }}
        showLabels
        className={(classes.root, 'fixed-bottom z-depth-1')}
      >
        <BottomNavigationAction
          value="/home"
          label="ホーム"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          value="/match"
          label="マッチング"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          value="/mypage"
          label="マイページ"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </>
  );
}
