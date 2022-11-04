import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#f69679',
    },
    primary: {
      main: '#fa8072',
      contrastText: '#ffff',
    },
    secondary: {
      main: '#E7E7E7',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ['Yomogi'].join(','),
  },
});

export default theme;
