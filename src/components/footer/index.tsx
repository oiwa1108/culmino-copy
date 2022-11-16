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
  marginTop: '14px',
  display: 'flex',
  justifyContent: 'space-around',
  fontSize: '22px',
  color: '#fff',
});

export default function Footer() {
  const navList: NavParam[] = [
    { text: '利用規約', href: '/terms' },
    { text: 'プライバシーポリシー', href: '/privacy' },
    { text: '特定商取引法', href: '/commercial' },
    { text: '資産決済法', href: '#' },
    { text: 'ガイドライン', href: '#' },
    { text: 'よくあるお問合せ', href: '#' },
    { text: '企業情報', href: '#' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        padding: '26px 20px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ width: '22%', minWidth: '100px' }}>
        <img
          src="/image/sublogo.jpg"
          width="100%"
          height="auto"
          alt="Culminoサブ"
        />
        <SnsContainer>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faTiktok} />
          <FontAwesomeIcon icon={faInstagram} />
        </SnsContainer>
      </Box>

      <Box
        sx={{
          flex: 1,
          paddingLeft: '12%',

          '& .MuiListItem-root:first-child': {
            marginTop: 0,
          },
        }}
      >
        <Navigations
          navList={navList}
          sx={{
            marginTop: '10px',
            padding: '0',
            listStyleType: 'none',
            color: '#fff',
            fontSize: '15px',
            fontWeight: '600',
          }}
        />
      </Box>
    </Box>
  );
}
