import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useHomeStyles = makeStyles((theme: Theme) => ({
  headerContainer: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/home/home-header.jpeg')`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
