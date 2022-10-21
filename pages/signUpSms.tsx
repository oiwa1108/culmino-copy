import { useState } from 'react';
import styles from '../styles/signUp.module.scss';

import Header from '../src/components/header';
import Head from '../src/components/head';
import { FormInput } from '../src/components/formInput';

import { Box, Button } from '@mui/material';

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
    <>
      <Head />
      <Header />
      <Box className={styles.signUp}>
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
    </>
  );
}
