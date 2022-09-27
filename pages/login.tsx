import styles from '../styles/login.module.scss';
import Header from '../src/components/header';
import Head from '../src/components/head';

import { FormControl, TextField, Button, Link } from '@mui/material';

export default function Login() {
  return (
    <div className={styles.all}>
      <Head />
      <Header />
      <div className={styles.container}>
        <div className={styles.logoWrap}>
          <img
            src="/image/mainlogo.jpg"
            alt="Culmino"
            className={styles.logo}
          />
        </div>
        <FormControl fullWidth>
          <TextField
            id="userName"
            label="ユーザー名"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <TextField
            id="password"
            label="パスワード"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <Button variant="contained" size="large" className={styles.button}>
            ログイン
          </Button>
          <p className={styles.borderText}>
            <span>または</span>
          </p>
          <p className={styles.text}>
            アカウントをお持ちでない方は
            <br />
            <Link href="/signup/1" underline="always">
              こちら
            </Link>
          </p>
        </FormControl>
      </div>
    </div>
  );
}
