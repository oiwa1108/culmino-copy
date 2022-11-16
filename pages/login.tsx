import styles from '../styles/login.module.scss';
import Head from '../src/components/head';

import { FormControl, TextField, Button, Link, Box } from '@mui/material';

export default function Login() {
  return (
    <Box sx={{ marginTop: '82px' }}>
      <Head />
      <div className={styles.container}>
        <div className={styles.logoWrap}>
          <img
            src="/image/mainlogo.png"
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
            <Link href="/terms" underline="always">
              こちら
            </Link>
          </p>
        </FormControl>
      </div>
    </Box>
  );
}
