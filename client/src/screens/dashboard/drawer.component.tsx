import { Box, Drawer, List } from '@mui/material';
import React from 'react';
import { MenuEnum } from '../../constants/menu.enum';
import MenuListItemComponent from './menu-list-item.component';

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
          <MenuListItemComponent name={MenuEnum.Flights} />
          <MenuListItemComponent name={MenuEnum.Hotels} />
          <MenuListItemComponent name={MenuEnum.FlightHotels} />
          <MenuListItemComponent name={MenuEnum.CarRentals} />
          <MenuListItemComponent name={MenuEnum.ShuttlesAndTransfers} />
          <MenuListItemComponent name={MenuEnum.Activities} />
          <MenuListItemComponent name={MenuEnum.HolidayRentals} />
          <MenuListItemComponent name={MenuEnum.BeachHolidays} />
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
