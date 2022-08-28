import MenuIcon from '@mui/icons-material/menu';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useState } from 'react';
interface NavParam {
  text: string;
  href: string;
}

const Navigations: React.FC<{ navList: NavParam[] }> = ({ navList }) => (
  <List>
    <nav>
      {navList.map((nav) => (
        <ListItem>
          <NavLink href={nav.href}>{nav.text}</NavLink>
        </ListItem>
      ))}
    </nav>
  </List>
);

const LogoImg = styled('img')({
  margin: '0 15px',
});

const NavLink = styled('a')({
  margin: '0 15px',
  fontFamily: 'Yomogi',
});

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const navList: NavParam[] = [
    { text: 'Culminoについて', href: '#' },
    { text: '特徴', href: '#' },
    { text: '簡単ステップ', href: '/step' },
    { text: '機能について', href: '#' },
    { text: '料金', href: '#' },
    { text: '安心安全', href: '#' },
    { text: 'ダウンロードの仕方', href: '#' },
    { text: '休会について', href: '#' },
  ];
  return (
    <>
      <Accordion expanded={expanded}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <LogoImg
              src="/image/mainlogo.jpg"
              width="100"
              height="50"
              alt="Culminoホーム"
            />
          </Box>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <MenuIcon onClick={() => setExpanded(!expanded)} />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {<Navigations navList={navList}></Navigations>}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
