import { useRouter } from 'next/router';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faTiktok,
  faSquareFacebook,
  faSquareTwitter,
  faSquareYoutube,
  faSquareInstagram,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
library.add(faTiktok as IconDefinition);
library.add(faSquareFacebook as IconDefinition);
library.add(faTwitterSquare as IconDefinition);
library.add(faSquareInstagram as IconDefinition);
library.add(faSquareYoutube as IconDefinition);

import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import { Specialty, Schedule, allSpecialty } from '@models/instructor';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListSubheader from '@mui/material/ListSubheader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { BottomNavi } from '@components/BottomNavi';

const rating = (defaultRating: number, ratingCount: number) => {
  return (
    <Stack direction="row">
      <Rating readOnly defaultValue={defaultRating} />
      <Typography sx={{ color: 'blue' }}>{ratingCount}</Typography>
    </Stack>
  );
};

type SNSIconProps = {
  icon:
    | typeof faSquareFacebook
    | typeof faSquareTwitter
    | typeof faSquareInstagram
    | typeof faSquareYoutube
    | typeof faTiktok;
  link?: string;
};
const SNSIcon = ({ icon, link }: SNSIconProps) => {
  const theme = useTheme();
  const isTiktok = icon === faTiktok;
  const mainColor = link
    ? `${theme.palette.primary.main}`
    : `${theme.palette.secondary.main}`;
  const iconColor = isTiktok ? 'white' : mainColor;
  const size = isTiktok ? 'sm' : 'lg';
  const style = isTiktok
    ? {
        padding: '2px',
        backgroundColor: mainColor,
      }
    : {};
  const aProps = link
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : {};
  return (
    <a {...aProps}>
      <FontAwesomeIcon
        size={size}
        icon={icon as IconDefinition}
        color={iconColor}
        style={style}
      />
    </a>
  );
};

type SNSIconsAreaProps = {
  spacing: number;
  facebookLink?: string;
  twitterLink?: string;
  InstagramLink?: string;
  youtubeLink?: string;
  tiktokLink?: string;
};
const SNSIconsArea = (props: SNSIconsAreaProps) => {
  return (
    <Stack direction="row" spacing={props.spacing}>
      <SNSIcon icon={faSquareFacebook} link={props.facebookLink} />
      <SNSIcon icon={faSquareTwitter} link={props.twitterLink} />
      <SNSIcon icon={faSquareInstagram} link={props.InstagramLink} />
      <SNSIcon icon={faSquareYoutube} link={props.youtubeLink} />
      <SNSIcon icon={faTiktok} link={props.tiktokLink} />
    </Stack>
  );
};

const specialtyChips = (specialty: Specialty[]) => {
  return (
    <Grid container columnSpacing={2} rowSpacing={1}>
      {allSpecialty.map((v, i) => {
        return (
          <Grid item key={i}>
            <Chip
              label={v}
              color={specialty.includes(v) ? 'primary' : 'secondary'}
            />
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
              <Divider />
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
    <>
      <Card>
        <CardContent sx={{ p: 0 }}>
          <Swiper
            modules={[Pagination]}
            loop={true}
            pagination={{ clickable: true, el: '#pagination' }}
          >
            {[...Array(5)].map((_, i) => (
              <SwiperSlide key={i}>
                <CardMedia
                  component="img"
                  height="375"
                  image={`https://picsum.photos/id/${i}/300/400`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div id="pagination" style={{ textAlign: 'center' }} />
        </CardContent>
        <CardHeader
          title={'カレン'}
          subheader={
            <Grid container spacing={5}>
              <Grid item sm={6}>
                {rating(3, 53)}
              </Grid>
              <Grid item sm={6}>
                <SNSIconsArea
                  spacing={1.5}
                  facebookLink="https://www.facebook.com"
                  youtubeLink="https://www.youtube.com"
                />
              </Grid>
            </Grid>
          }
        />
        <CardContent>
          <Stack spacing={2}>
            {specialtyChips([
              '座学１',
              '座学２',
              'マッサージ１',
              'マッサージ２',
              'タッチング２',
              '乳房・乳首',
              '外陰部',
              '内陰部',
              'コミュニケーションレッスン',
            ])}
            <Typography>
              ここにインストラクターの説明が入りますここにインストラクターの説明が入りますここにインストラクターの説明が入りますここにインストラクターの説明が入りますここにインストラクターの説明が入りますここにインストラクターの説明が入りますここにインストラクターの説明が入りますここにインストラクターの説明が入ります
            </Typography>
          </Stack>
        </CardContent>
        <CardContent sx={{ px: 0 }}>
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
        </CardContent>
      </Card>
      <BottomNavi _type="training" />
    </>
  );
}
