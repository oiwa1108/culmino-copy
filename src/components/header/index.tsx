<<<<<<< HEAD
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
=======
import { Navbar, Nav } from 'react-bootstrap';
import styles from './style.module.css';
import Link from "next/link";
>>>>>>> c0122a7 (Culminoについて他 #3)

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
<<<<<<< HEAD
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
=======
      <Navbar
        collapseOnSelect
        expand="false"
        bg="white"
        variant="light"
        sticky="top"
      >
        <Link href="/"><Navbar.Brand>
          <img
            className={styles.logo}
            src="/image/mainlogo.jpg"
            width="100"
            height="50"
            alt="Culminoホーム"
          />
        </Navbar.Brand></Link>
        <div className={styles.humburger}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className={styles.navlink}>
            <Nav className="mr-auto">
              <Nav.Link href="/aboutCulmino">Culminoについて</Nav.Link>
              <Nav.Link href="/feature">特徴</Nav.Link>
              <Nav.Link href="/step">簡単ステップ</Nav.Link>
              <Nav.Link href="/aboutFunction">機能について</Nav.Link>
              <Nav.Link href="/price">料金</Nav.Link>
              <Nav.Link href="/safety">安心安全</Nav.Link>
              <Nav.Link href="#">ダウンロードの仕方</Nav.Link>
              <Nav.Link href="/recess">休会について</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
>>>>>>> c0122a7 (Culminoについて他 #3)
    </>
  );
}
