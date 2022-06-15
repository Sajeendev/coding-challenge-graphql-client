import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { createGenerateClassName, StylesProvider } from '@mui/styles';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './state/store';
import GlobalThemeProvider from './styles/global-theme.provider';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <GlobalThemeProvider>
          <CssBaseline />
          <App />
        </GlobalThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);
