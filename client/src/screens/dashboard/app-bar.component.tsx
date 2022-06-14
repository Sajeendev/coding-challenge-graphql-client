import { Menu, MenuOpen } from '@mui/icons-material';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { MenuEnum } from '../../constants/menu.enum';
import AccountMenuComponent from './account-menu.component';
import MenuButtonComponent from './menu-button.component';

interface PropTypes {
  handleDrawerToggle: () => void;
  mobileDrawerOpen: boolean;
}

const AppBarComponent = ({
  handleDrawerToggle,
  mobileDrawerOpen,
}: PropTypes) => {
  const theme = useTheme();

  return (
    <AppBar
      component="nav"
      position="fixed"
      sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}>
          {mobileDrawerOpen ? <MenuOpen /> : <Menu />}
        </IconButton>

        <img
          src="/assets/logos/logo-edreams.jpeg"
          alt="Logo"
          style={{ maxHeight: '60px', maxWidth: '120px', marginRight: '10px' }}
        />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <MenuButtonComponent name={MenuEnum.Flights} />
          <MenuButtonComponent name={MenuEnum.Hotels} />
          <MenuButtonComponent name={MenuEnum.FlightHotels} />
          <MenuButtonComponent name={MenuEnum.CarRentals} />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}>
          <AccountMenuComponent />
          <Typography>EN</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
