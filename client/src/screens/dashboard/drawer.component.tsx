import { Box, Drawer, List } from '@mui/material';
import { MenuEnum } from '../../constants/menu.enum';
import MobileMenuListItemComponent from './mobile-menu-list-item.component';

interface PropTypes {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

const DrawerComponent = ({ handleDrawerToggle, mobileOpen }: PropTypes) => {
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 240,
        },
      }}>
      <Box onClick={handleDrawerToggle}>
        <List>
          <MobileMenuListItemComponent name={MenuEnum.Flights} />
          <MobileMenuListItemComponent name={MenuEnum.Hotels} />
          <MobileMenuListItemComponent name={MenuEnum.FlightHotels} />
          <MobileMenuListItemComponent name={MenuEnum.CarRentals} />
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
