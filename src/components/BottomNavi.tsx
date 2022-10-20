import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import School from '@mui/icons-material/School';
import Event from '@mui/icons-material/Event';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router';

type BottomNaviProps = { _type: 'home' | 'match' | 'mypage' };

export function BottomNavi(props: BottomNaviProps) {
  const router = useRouter();
  const [value, setValue] = React.useState(props._type);

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={async (event, newValue) => {
          setValue(newValue);
          router.push(newValue);
        }}
        showLabels
        className={'fixed-bottom z-depth-1'}
        sx={{
          root: {
            width: 500,
          },
        }}
      >
        <BottomNavigationAction value="home" icon={<School />} />
        <BottomNavigationAction value="match" icon={<FavoriteIcon />} />
        <BottomNavigationAction value="schedule" icon={<Event />} />
        <BottomNavigationAction value="mypage" icon={<AccountCircle />} />
      </BottomNavigation>
    </>
  );
}
