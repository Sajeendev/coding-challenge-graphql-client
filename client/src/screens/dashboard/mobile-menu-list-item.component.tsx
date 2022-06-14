import { ListItem, ListItemButton, ListItemText } from '@mui/material';

interface PropTypes {
  name: string;
}

const MobileMenuListItemComponent = ({ name }: PropTypes) => {
  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ textAlign: 'center' }}>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default MobileMenuListItemComponent;
