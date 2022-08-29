import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#fa8072',
    },
    secondary: {
      main: '#f69679',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
