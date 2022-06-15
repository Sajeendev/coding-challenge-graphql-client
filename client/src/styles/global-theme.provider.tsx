import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const GlobalThemeProvider = ({ children }: { children: any }) => {
  const customTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },

    palette: {
      primary: {
        main: '#005CAD',
      },
      secondary: {
        main: '#F70363',
      },
      info: {
        main: '#2196f3',
      },
      error: {
        main: '#ef233c',
      },
      warning: {
        main: '#F2C414',
      },
      success: {
        main: '#007200',
      },
    },
  });

  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default GlobalThemeProvider;
