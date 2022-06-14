import { Box } from '@mui/material';
import { useState } from 'react';
import AppRoutes from '../../routes/app.routes';
import AppBarComponent from './app-bar.component';
import DrawerComponent from './drawer.component';

const DashboardScreen = () => {
  /**
   * Local state
   */
  const [mobileOpen, setMobileOpen] = useState(false);

  /**
   * Handlers
   */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarComponent
        handleDrawerToggle={handleDrawerToggle}
        mobileDrawerOpen={mobileOpen}
      />
      <Box component="nav">
        <DrawerComponent
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <AppRoutes />
      </Box>
    </Box>
  );
};

export default DashboardScreen;
