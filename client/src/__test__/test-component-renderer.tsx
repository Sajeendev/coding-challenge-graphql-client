import { CssBaseline } from '@mui/material';
import { createGenerateClassName, StylesProvider } from '@mui/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../state/store';
import GlobalThemeProvider from '../styles/global-theme.provider';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

interface PropTypes {
  children: JSX.Element;
}

const TestComponentRenderer = ({ children }: PropTypes) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <GlobalThemeProvider>
            <CssBaseline />
            {children}
          </GlobalThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default TestComponentRenderer;
