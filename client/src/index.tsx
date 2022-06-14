import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { createGenerateClassName, StylesProvider } from '@mui/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalThemeProvider from './styles/global-theme.provider';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <GlobalThemeProvider>
          <CssBaseline />
          <App />
        </GlobalThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
