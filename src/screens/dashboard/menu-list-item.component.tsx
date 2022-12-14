import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

interface PropTypes {
  name: string;
}

const MenuListItemComponent = ({ name }: PropTypes) => {
  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ textAlign: 'center' }}>
        <ListItemText
          primary={
            <Typography sx={{ textTransform: 'none' }}>{name}</Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuListItemComponent;
