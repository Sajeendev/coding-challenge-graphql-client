import { MenuBook } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuButtonComponent from './menu-button.component';

interface PropTypes {
  handleDrawerToggle: () => void;
}

const AppBarComponent = ({ handleDrawerToggle }: PropTypes) => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuBook />
        </IconButton>
        <Typography variant="h6" component="div">
          MUI
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <MenuButtonComponent name="Menu 1" />
          <MenuButtonComponent name="Menu 2" />
          <MenuButtonComponent name="Menu 3" />
          <MenuButtonComponent name="Menu 4" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
