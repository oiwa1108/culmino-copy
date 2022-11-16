import { useState } from 'react';
import styles from '../styles/signUp.module.scss';

import Head from '../src/components/head';
import { FormInput } from '../src/components/formInput';

import { Box, Button, Typography } from '@mui/material';

export default function signUpSms() {
  const [smsCode, setSmsCode] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    setSmsCode(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Box>
      <Head />
      <Box className={styles.signUp}>
        <Typography
          sx={{ color: 'error.main', fontSize: 15, fontWeight: '600', mb: 2 }}
        >
          電話番号認証がまだ完了していません。
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <FormInput
            label="ご入力いただいた電話番号に送信された6桁のコードを入力してください。"
            id="smsCode"
            name="smsCode"
            placeholder="0123456"
            value={smsCode}
            required={true}
            onChange={handleInputChange}
          />

          <Button
            variant="contained"
            size="large"
            type="submit"
            className={styles.signUp_button}
          >
            送信
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
