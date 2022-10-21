import { useState } from 'react';
import styles from '../styles/signUp.module.scss';

import Header from '../src/components/header';
import Head from '../src/components/head';
import { FormInput } from '../src/components/formInput';

import { Box, Button } from '@mui/material';

export default function signUpTel() {
  const [tel, setTel] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    setTel(value);
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
            label="電話番号を入力してください。"
            id="tel"
            name="tel"
            placeholder="000-000-0000"
            value={tel}
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
