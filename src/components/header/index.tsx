import { Navbar, Nav } from 'react-bootstrap';
import styles from './style.module.css';

export default function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="false"
        bg="white"
        variant="light"
        sticky="top"
      >
        <Navbar.Brand href="/">
          <img
            className={styles.logo}
            src="/image/mainlogo.jpg"
            width="100"
            height="50"
            alt="Culminoホーム"
          />
        </Navbar.Brand>
        <div className={styles.humburger}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className={styles.navlink}>
            <Nav className="mr-auto">
              <Nav.Link href="#">Culminoについて</Nav.Link>
              <Nav.Link href="#">特徴</Nav.Link>
              <Nav.Link href="/step">簡単ステップ</Nav.Link>
              <Nav.Link href="#">機能について</Nav.Link>
              <Nav.Link href="#">料金</Nav.Link>
              <Nav.Link href="#">安心安全</Nav.Link>
              <Nav.Link href="#">ダウンロードの仕方</Nav.Link>
              <Nav.Link href="#">休会について</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
