import Head from '../src/components/head';
import { BottomNavi } from '@components/BottomNavi';
import { Lazy, EffectCards } from 'swiper';
import { Box, IconButton, Typography, Rating } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import styles from '../styles/home.module.scss';

export default function Home() {
  const imageList = [
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
  ];
  return (
    <>
      <Head />
      <Box className={styles.slider}>
        <Swiper
          loop={true}
          effect={'cards'}
          grabCursor={true}
          modules={[Lazy, EffectCards]}
          lazy={true}
          slidesPerView={1}
        >
          {imageList.map((item, index) => {
            return (
              <SwiperSlide key={index} className={styles.slider_item}>
                <img src={item} className="swiper-lazy" alt="" />

                <Box className={styles.slider_profile}>
                  <Typography className={styles.slider_name}>カレン</Typography>
                  <Box className={styles.slider_ratingWrap}>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                    <Typography className={styles.slider_ratingNumber}>
                      10
                    </Typography>
                  </Box>

                  <Box className={styles.slider_tagWrap}>
                    <Typography
                      component="span"
                      className={styles.slider_tag}
                      sx={{ backgroundColor: 'primary.main' }}
                    >
                      キス
                    </Typography>
                    <Typography
                      component="span"
                      className={styles.slider_tag}
                      sx={{ backgroundColor: 'primary.main' }}
                    >
                      マインド
                    </Typography>
                    <Typography
                      component="span"
                      className={styles.slider_tag}
                      sx={{ backgroundColor: 'primary.main' }}
                    >
                      マインド
                    </Typography>
                  </Box>
                </Box>

                <IconButton
                  aria-label="info"
                  className={styles.slider_moreButton}
                >
                  <InfoOutlinedIcon />
                </IconButton>
                <Box className="swiper-lazy-preloader swiper-lazy-preloader-white"></Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <BottomNavi _type="home" />
    </>
  );
}
