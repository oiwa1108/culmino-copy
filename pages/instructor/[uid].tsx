import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const nameAndRating = (defaultRating: number) => {
  return (
    <Stack>
      <Typography variant="h3">カレン</Typography>
      <Stack direction="row" spacing={2}>
        <Rating readOnly defaultValue={defaultRating} />
        <Typography sx={{ color: 'blue' }}>53</Typography>
      </Stack>
    </Stack>
  );
};

export default function instructorProfile() {
  const router = useRouter();
  const { uid } = router.query;

  //TODO: uid が不正なものであれば404のエラーページ表示
  return (
    <Stack>
      <Container disableGutters={true} sx={{ width: '100%' }}>
        <img src="https://picsum.photos/800/600" />
      </Container>
      {nameAndRating(3)}
    </Stack>
  );
}
