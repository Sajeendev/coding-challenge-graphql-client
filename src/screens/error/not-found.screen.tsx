import { Box, Paper, Typography } from '@mui/material';
import { globalProps } from '../../styles/global.props';

const NotFoundScreen = () => {
  return (
    <Box sx={{ ...globalProps.box1200 }}>
      <Paper
        sx={{
          ...globalProps.paperContainer,
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        elevation={0}>
        <Typography variant="h2">Page Not found</Typography>
        <img
          src="/assets/images/not-found.png"
          alt=""
          style={{ maxWidth: '600px', margin: 'auto' }}
        />
      </Paper>
    </Box>
  );
};

export default NotFoundScreen;
