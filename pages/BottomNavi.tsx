import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

type BottomNaviProps = { _type: 'home' | 'match' | 'mypage' };

export function BottomNavi(props: BottomNaviProps) {
  const [value, setValue] = React.useState(props._type); // アクセス時のURLを解析して、適切なナビゲーションボタンをアクティブにする。

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={async (event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={'fixed-bottom z-depth-1'}
        sx={{
          root: {
            width: 500,
          },
        }}
      >
        <BottomNavigationAction
          value="home"
          label="ホーム"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          value="match"
          label="マッチング"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          value="mypage"
          label="マイページ"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </>
  );
}
