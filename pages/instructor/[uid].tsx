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
import { Specialty, Schedule } from '@models/instructor';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListSubheader from '@mui/material/ListSubheader';

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

// TODO:SNSのリンクをpropsに追加
const specialtyChips = (specialty: Specialty[]) => {
  return (
    <Grid container columnSpacing={2} rowSpacing={1}>
      {specialty.map((v, i) => {
        return (
          <Grid item key={i}>
            <Chip label={v} color="primary" />
          </Grid>
        );
      })}
    </Grid>
  );
};

const jaDayMap: { [key: number]: string } = {
  0: '日',
  1: '月',
  2: '火',
  3: '水',
  4: '木',
  5: '金',
  6: '土',
};
const subHeaderTitle = (k: Date) =>
  `${k.getMonth() + 1}/${k.getDate()}(${jaDayMap[k.getDay()]})`;
const toHHMM = new Intl.DateTimeFormat('ja-JP', {
  hour: '2-digit',
  minute: '2-digit',
});
const scheduleList = (schedules: Map<Date, Schedule[]>) => {
  const theme = useTheme();
  return (
    <List>
      {[...schedules.keys()].map((k) => (
        <>
          <ListSubheader
            key={k.toUTCString()}
            sx={{
              textAlign: 'center',
              backgroundColor: `${theme.palette.secondary.main}`,
            }}
          >
            {subHeaderTitle(k)}
          </ListSubheader>
          {schedules.get(k)?.map((s, i) => (
            <>
              <ListItem key={i}>
                <ListItemAvatar>
                  <Avatar src={s.icon_img_url || ''} />
                </ListItemAvatar>

                <ListItemText
                  primary={s.title}
                  secondary={
                    <>
                      {`${s.price}コイン`}
                      <br />
                      {`${toHHMM.format(s.startAt)}〜${toHHMM.format(s.endAt)}`}
                    </>
                  }
                />
              </ListItem>
            </>
          )) || ''}
        </>
      ))}
    </List>
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
        <Stack spacing={2}>
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
          {scheduleList(
            new Map<Date, Schedule[]>([
              [
                new Date('2022-10-31'),
                [
                  {
                    title: 'タイトルタイトルタイトルタイトル',
                    price: 100,
                    date: new Date('2022-10-31'),
                    startAt: new Date(),
                    endAt: new Date(),
                  },
                  {
                    title: 'タイトルタイトルタイトルタイトル',
                    price: 100,
                    date: new Date('2022-10-31'),
                    startAt: new Date(),
                    endAt: new Date(),
                  },
                ],
              ],
              [
                new Date('2022-11-1'),
                [
                  {
                    title: 'タイトルタイトルタイトルタイトル',
                    price: 100,
                    date: new Date('2022-11-1'),
                    startAt: new Date(),
                    endAt: new Date(),
                  },
                ],
              ],
            ]),
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
