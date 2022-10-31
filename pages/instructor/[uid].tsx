import { useRouter } from 'next/router';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import { Specialty } from '@models/instructor';
import Box from '@mui/material/Box';

const rating = (defaultRating: number, ratingCount: number) => {
  return (
    <Stack direction="row">
      <Rating readOnly defaultValue={defaultRating} />
      <Typography sx={{ color: 'blue' }}>{ratingCount}</Typography>
    </Stack>
  );
};

const snsIcons = () => {
  const theme = useTheme();

  return (
    <Stack direction="row" spacing={1}>
      <FacebookIcon color="primary" />
      <TwitterIcon color="primary" />
      <InstagramIcon color="primary" />
      <YouTubeIcon color="primary" />
      <FontAwesomeIcon
        icon={faTiktok}
        color={`${theme.palette.primary.main}`}
      />
    </Stack>
  );
};

const specialtyChips = (specialty: Specialty[]) => {
  return (
    <Grid container spacing={1}>
      {specialty.map((v) => {
        return (
          <Grid item>
            <Chip label={v} color="primary" />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default function instructorProfile() {
  const router = useRouter();
  const { uid } = router.query;

  //TODO: uid が不正なものであれば404のエラーページ表示
  return (
    <Card>
      <CardMedia
        component="img"
        height="375"
        image="https://picsum.photos/300/400"
        alt="Paella dish"
      />
      <CardHeader
        title={'カレン'}
        subheader={
          <Grid container spacing={6}>
            <Grid item sm={6}>
              {rating(3, 53)}
            </Grid>
            <Grid item sm={6}>
              {snsIcons()}
            </Grid>
          </Grid>
        }
      />
      <CardContent>
        {specialtyChips([
          'キス',
          'キス',
          'キス',
          'キス',
          'キス',
          'キス',
          'キス',
          'キス',
          'キス',
        ])}
        <Typography>
          ここにインストラクターの説明が入りますここにインストラクターの説明が入りますここにインストラクターの説明が入りますここにインストラクターの説明が入りますここにインストラクターの説明が入りますここにインストラクターの説明が入りますここにインストラクターの説明が入りますここにインストラクターの説明が入ります
        </Typography>
      </CardContent>
    </Card>
  );
}
