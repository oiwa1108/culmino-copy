import { useState } from 'react';
import styles from '../styles/signUp.module.scss';

import Header from '../src/components/header';
import Head from '../src/components/head';
import { FormInput } from '../src/components/formInput';
import { FormRadio } from '../src/components/formRadio';

import { Box, Button } from '@mui/material';

export default function signUp() {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
    sex: '',
    birthday: '',
  });

  const radioData = [
    { value: 'male', label: '男性' },
    { value: 'female', label: '女性' },
    { value: 'neither', label: 'どちらでもない' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Head />
      <Header />
      <Box className={styles.singUp}>
        <Box component="form" onSubmit={handleSubmit}>
          <FormInput
            label="名前"
            id="name"
            name="name"
            placeholder="ニックネーム"
            value={inputValue.name}
            required={true}
            onChange={handleInputChange}
          />

          <FormInput
            label="メールアドレス"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            value={inputValue.email}
            type="email"
            required={true}
            onChange={handleInputChange}
          />

          <FormInput
            label="パスワード"
            id="password"
            name="password"
            placeholder="パスワード"
            value={inputValue.password}
            type="password"
            required={true}
            onChange={handleInputChange}
          />

          <FormRadio
            radioData={radioData}
            label="性別"
            id="sex"
            required={true}
            onChange={handleInputChange}
          />

          <FormInput
            label="生年月日"
            id="birthday"
            name="birthday"
            value={inputValue.birthday}
            type="date"
            required={true}
            onChange={handleInputChange}
          />

          <Button
            variant="contained"
            size="large"
            type="submit"
            className={styles.singUp_button}
          >
            登録
          </Button>
        </Box>
      </Box>
    </>
  );
}
