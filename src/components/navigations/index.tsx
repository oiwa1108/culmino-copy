import { SxProps, Theme } from '@mui/material/styles';
import { List, ListItem } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

export interface NavParam {
  text: string;
  href: string;
}

const NavLink = styled('a')({
  margin: '0 15px',
  fontFamily: 'Yomogi',
});

export const Navigations: React.FC<{
  navList: NavParam[];
  sx?: SxProps<Theme> | undefined;
}> = ({ navList, sx }) => (
  <List>
    <nav>
      {navList.map((nav, index) => (
        <ListItem sx={sx} key={index}>
          <NavLink href={nav.href}>{nav.text}</NavLink>
        </ListItem>
      ))}
    </nav>
  </List>
);
