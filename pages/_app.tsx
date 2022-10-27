import '../styles/globals.css';
import reduxStore from 'redux/store';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { Provider } from 'react-redux';

import theme from '../src/theme';

function MyApp({ Component, pageProps }) {
  const { store } = reduxStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ maxWidth: '500px', margin: '0 auto' }}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
