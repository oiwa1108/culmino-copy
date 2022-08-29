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
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
