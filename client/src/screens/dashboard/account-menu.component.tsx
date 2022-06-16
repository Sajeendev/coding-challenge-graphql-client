import { ConnectingAirports, Person, Settings } from '@mui/icons-material';
import Logout from '@mui/icons-material/Logout';
import { Divider, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { MouseEvent, useState } from 'react';

interface MenuItemPropTypes {
  icon: JSX.Element;
  text: string;
  onClick: () => void;
}

const MenuItemComponent = ({ icon, text, onClick }: MenuItemPropTypes) => (
  <MenuItem onClick={onClick}>
    <ListItemIcon>{icon}</ListItemIcon>
    <Typography noWrap> {text}</Typography>
  </MenuItem>
);

const AccountMenuComponent = () => {
  /**
   * Local state
   */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /**
   * Handlers
   */
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        data-testid="user-account-menu">
        <Avatar alt="Account" src="" sx={{ width: 24, height: 24 }} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            padding: '10px',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Avatar sx={{ width: 48, height: 48 }}>A</Avatar>
        </Box>
        <Box sx={{ textAlign: 'center', padding: '10px' }}>
          <Typography variant="body2" noWrap>
            Signed in as
          </Typography>
          <Typography noWrap>test@gmail.com</Typography>
        </Box>

        <Divider sx={{ margin: '5px 0' }} />

        <MenuItemComponent
          icon={<Person fontSize="small" />}
          text="My Account"
          onClick={() => {}}
        />

        <MenuItemComponent
          icon={<ConnectingAirports fontSize="small" />}
          text="My Trips"
          onClick={() => {}}
        />

        <MenuItemComponent
          icon={<Settings fontSize="small" />}
          text="Settings"
          onClick={() => {}}
        />

        <Divider sx={{ margin: '5px 0' }} />

        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Typography noWrap>Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountMenuComponent;
