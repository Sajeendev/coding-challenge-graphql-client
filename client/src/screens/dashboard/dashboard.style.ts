import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useDashboardStyles = makeStyles((theme: Theme) => ({
  appBarLogo: {
    maxHeight: '60px',
    maxWidth: '120px',
    marginRight: '10px',
    cursor: 'pointer',
  },
}));
