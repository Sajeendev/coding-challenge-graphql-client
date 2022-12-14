import { Menu, MenuOpen } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { MenuEnum } from '../../constants/menu.enum';
import { AppUrlEnum } from '../../routes/app-url.enum';
import AccountMenuComponent from './account-menu.component';
import MoreMenuListComponent from './drop-down-menu-list.component';
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
  const navigate = useNavigate();

  return (
    <AppBar
      data-testid="app-bar"
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
          style={{
            maxHeight: '60px',
            maxWidth: '120px',
            marginRight: '10px',
            cursor: 'pointer',
          }}
          onClick={() => navigate(AppUrlEnum.Home)}
          data-testid="company-logo"
        />

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <MenuButtonComponent name={MenuEnum.Flights} />
          <MenuButtonComponent name={MenuEnum.Hotels} />
          <MenuButtonComponent name={MenuEnum.FlightHotels} />
          <MoreMenuListComponent />
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}>
          <Button component={Link} to={AppUrlEnum.Signin} color="inherit">
            <Typography sx={{ textTransform: 'none' }}>SignIn</Typography>
          </Button>
          <AccountMenuComponent />
          <Typography data-testid="language-option">EN</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
