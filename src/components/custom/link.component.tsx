import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface PropTypes {
  name: string;
  linkTo: string;
}

const LinkComponent = ({ name, linkTo }: PropTypes) => {
  const navigate = useNavigate();

  return (
    <Link
      color="primary"
      component="button"
      variant="body2"
      onClick={() => navigate(linkTo)}
      underline="none">
      {name}
    </Link>
  );
};

export default LinkComponent;
