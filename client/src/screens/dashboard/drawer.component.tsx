import { Box, Divider, Drawer, List, Typography } from '@mui/material';
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
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        <List>
          <MobileMenuListItemComponent name="Menu 1" />
          <MobileMenuListItemComponent name="Menu 2" />
          <MobileMenuListItemComponent name="Menu 3" />
          <MobileMenuListItemComponent name="Menu 4" />
        </List>
      </Box>{' '}
    </Drawer>
  );
};

export default DrawerComponent;
