import MenuIcon from '@mui/icons-material/menu';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { NavParam, Navigations } from '../navigations';

const LogoImg = styled('img')({
  margin: '0 15px',
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
      <Accordion
        expanded={expanded}
        sx={{
          boxShadow: 'none',
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto',
          position: 'fixed',
          top: 0,

          '& .MuiCollapse-root': {
            position: 'absolute',
            width: '100%',
            top: '100%',
            bgcolor: '#fff',
          },
        }}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            '& .MuiAccordionSummary-content': {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 0,
              padding: '10px 0',

              '&.Mui-expanded': {
                margin: 0,
              },
            },
          }}
        >
          <Box
            sx={{
              width: '160px',
            }}
          >
            <LogoImg
              src="/image/mainlogo.jpg"
              width="100%"
              height="auto"
              alt="Culmino"
              sx={{ margin: 0 }}
            />
          </Box>

          <Box sx={{}}>
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
