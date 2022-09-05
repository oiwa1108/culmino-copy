import styles from '../styles/login.module.css';
import Header from '../src/components/header';
import Head from '../src/components/head';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.all}>
      <Head />
      <Header />
      <div className={styles.container}>
        <img
          src="/image/mainlogo.jpg"
          alt="Culminoメインロゴ"
          className={styles.logo}
        />
        <FormControl>
          <FormLabel>ユーザー名</FormLabel>
          <Input type="text" />
          <FormLabel>パスワード</FormLabel>
          <Input type="password" />
          <Link href="/HomeTab"><a>
            <Button
              className={styles.btn}
              bg="#f7c6bd"
              textColor="white"
              _hover={{ bg: '#ff6c94' }}
            >
              ログイン
            </Button>
          </a></Link>
          <FormHelperText className={styles.txt}>
            アカウントをお持ちでない方は
          </FormHelperText>
          <a href="#">
            <p className={styles.there}>こちら</p>
          </a>
        </FormControl>
      </div>
    </div>
  );
}
