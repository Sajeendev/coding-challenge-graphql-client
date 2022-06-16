import { Button, Typography } from '@mui/material';

interface PropTypes {
  name: string;
}

const MenuButtonComponent = ({ name }: PropTypes) => {
  return (
    <Button sx={{ color: '#fff' }}>
      <Typography sx={{ textTransform: 'none' }}>{name}</Typography>
    </Button>
  );
};

export default MenuButtonComponent;
