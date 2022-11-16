import { useState } from 'react';
import styles from '../styles/signUp.module.scss';

import Head from '../src/components/head';
import { FormInput } from '../src/components/formInput';

import { Box, Button, Typography } from '@mui/material';

export default function signUpMail() {
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    setConfirmationCode(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Head />
      <Box className={styles.signUp}>
        <Typography
          sx={{ color: 'error.main', fontSize: 15, fontWeight: '600' }}
        >
          メールアドレス認証がまだ完了していません。
        </Typography>
        <Typography sx={{ mt: 2, fontSize: 15, fontWeight: '600' }}>
          ご入力いただいたメールアドレスに、6桁の確認コードを送信しました。
          <br />
          確認コードのご入力お願いします。
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <FormInput
            label="確認コード"
            id="confirmationCode"
            name="confirmationCode"
            placeholder="0123456"
            value={confirmationCode}
            required={true}
            onChange={handleInputChange}
          />

          <Button
            variant="contained"
            size="large"
            type="submit"
            className={styles.signUp_button}
          >
            確認
          </Button>
        </Box>
      </Box>
    </>
  );
}
