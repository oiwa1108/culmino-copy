import { useState, useEffect } from 'react';
import styles from '../styles/signUp.module.scss';

import Header from '../src/components/header';
import Head from '../src/components/head';
import { FormInput } from '../src/components/formInput';
import { FormRadio } from '../src/components/formRadio';
import { FormSelect } from '../src/components/formSelect';

import { Box, Button, SelectChangeEvent, Typography } from '@mui/material';

export default function signUp() {
  const birthday_years = [...Array(60).keys()]
    .map((i) => i + 1)
    .map((i) => new Date().getFullYear() - 78 + i);
  const birthday_months = [...Array(12).keys()].map((i) => i + 1);
  const birthday_days = [...Array(31).keys()].map((i) => i + 1);

  const [selectValue, setSelectValue] = useState({
    year: '',
    month: '',
    day: '',
  });

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

  useEffect(() => {
    setInputValue({
      ...inputValue,
      ['birthday']: `${selectValue.year}/${selectValue.month}/${selectValue.day}`,
    });
  }, [selectValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setSelectValue({
      ...selectValue,
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
      <Box className={styles.signUp}>
        <Box component="form" onSubmit={handleSubmit}>
          <FormInput
            label="ユーザー名"
            id="name"
            name="name"
            placeholder="ユーザー名"
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

          <Box sx={{ paddingBottom: '20px' }}>
            <Typography component="label" className={styles.signUp_label}>
              生年月日
            </Typography>

            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
            >
              <FormSelect
                selectData={birthday_years}
                label="年"
                id="year"
                selectValue={selectValue.year}
                onChange={handleSelectChange}
              />

              <FormSelect
                selectData={birthday_months}
                label="月"
                id="month"
                selectValue={selectValue.month}
                onChange={handleSelectChange}
              />

              <FormSelect
                selectData={birthday_days}
                label="日"
                id="day"
                selectValue={selectValue.day}
                onChange={handleSelectChange}
              />
            </Box>
          </Box>

          <Button
            variant="contained"
            size="large"
            type="submit"
            className={styles.signUp_button}
          >
            次へ(メールアドレス認証)
          </Button>
        </Box>
      </Box>
    </>
  );
}
