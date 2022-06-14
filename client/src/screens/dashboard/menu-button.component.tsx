import { Button } from '@mui/material';

interface PropTypes {
  name: string;
}

const MenuButtonComponent = ({ name }: PropTypes) => {
  return <Button sx={{ color: '#fff' }}>{name}</Button>;
};

export default MenuButtonComponent;
