import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faTiktok,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavParam, Navigations } from '../navigations';

const SnsContainer = styled('div')({
  margin: '10px 10px 0 10px',
  display: 'flex',
  fontSize: '25px',
  justifyContent: 'space-around',
  color: '#fff',
});

export default function Footer() {
  const navList: NavParam[] = [
    { text: '利用規約', href: '#' },
    { text: 'プライバシーポリシー', href: '#' },
    { text: '特定商取引法', href: '#' },
    { text: '資産決済法', href: '#' },
    { text: 'ガイドライン', href: '#' },
    { text: 'よくあるお問合せ', href: '#' },
    { text: '企業情報', href: '#' },
  ];

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Box sx={{ margin: 0, display: 'flex' }}>
        <Box sx={{ margin: '20px 0 0 20px' }}>
          <img
            src="/image/sublogo.jpg"
            width="100"
            height="100"
            alt="Culminoサブ"
          />
          <SnsContainer>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faTiktok} />
            <FontAwesomeIcon icon={faInstagram} />
          </SnsContainer>
        </Box>
        <Navigations
          navList={navList}
          sx={{
            margin: '10px 0 0 70px',
            padding: '0',
            listStyleType: 'none',
            color: '#fff',
            fontFamily: 'Yomogi', //cursive;
            fontSize: '15px',
          }}
        ></Navigations>
      </Box>
    </Box>
  );
}
