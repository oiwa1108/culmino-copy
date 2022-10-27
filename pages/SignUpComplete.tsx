import Header from '../src/components/header';
import Head from '../src/components/head';
import { Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function SignUpComplete() {
  const router = useRouter();

  return (
    <>
      <Head />
      <Box sx={{ maxWidth: '375px', margin: '0 auto' }}>
        <Header />
        <Box sx={{ textAlign: 'center', paddingY: 4, paddingX: 2 }}>
          <Typography sx={{ fontWeight: 600 }}>
            会員登録完了ありがとうございます
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ fontWeight: 600, mt: 4 }}
            onClick={() => {
              router.push('/home');
            }}
          >
            ホームへ
          </Button>
        </Box>
      </Box>
    </>
  );
}
