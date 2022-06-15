import { Box } from '@mui/material';
import { useState } from 'react';
import AppRoutes from '../../routes/app.routes';
import { ColorsEnum } from '../../styles/colors.enum';
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 1, sm: 2, md: 3 },
          background: ColorsEnum.DashboardBackground,
          minHeight: '100vh',
          height: '100%',
        }}>
        <AppRoutes />
      </Box>
    </Box>
  );
};

export default DashboardScreen;
