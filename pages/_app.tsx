import '../styles/globals.css';
import reduxStore from 'redux/store';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import theme from '../src/theme';

function MyApp({ Component, pageProps }) {
  const { store, persistor } = reduxStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
