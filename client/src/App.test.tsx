import { CssBaseline } from '@mui/material';
import { createGenerateClassName, StylesProvider } from '@mui/styles';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './state/store';
import GlobalThemeProvider from './styles/global-theme.provider';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

test('renders PRIME text in home screen', () => {
  render(
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
  const linkElement = screen.getByText(/PRIME/i);
  expect(linkElement).toBeInTheDocument();
});
