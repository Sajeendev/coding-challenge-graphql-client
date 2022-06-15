import { Box, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import SearchBoxComponent from '../../components/search-box/search-box-component';
import { getLocationsAction } from '../../state/flight-search/get-locations.slice';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { globalProps } from '../../styles/global.props';
import { useHomeStyles } from './home.style';
import HottestDealCardComponent from './hottest-deal-card.component';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const styles = useHomeStyles();

  /**
   * Global state
   */
  const getLocationsState = useAppSelector(state => state.getLocationsState);
  const { loading, success, data } = getLocationsState;

  /**
   * Effects
   */
  useEffect(() => {
    // Avoid calling api for every pageload to optimize performance
    !success && dispatch(getLocationsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <Box>
      {/* Header section */}
      <Box className={styles.headerContainer}>
        <Box sx={{ ...globalProps.box1200 }}>
          <Paper
            variant="outlined"
            elevation={0}
            sx={{
              ...globalProps.paperContainer,
            }}>
            <SearchBoxComponent
              locations={data}
              isLoading={loading}
              isHomeScreen={true}
            />
          </Paper>
        </Box>
      </Box>

      {/* Hottest deals sections */}
      <Box sx={{ ...globalProps.box1200, padding: '50px 0' }}>
        <Stack direction="row" spacing={2}>
          <img
            src="/assets/images/home/fire.png"
            alt="Fire"
            style={{ maxWidth: '80px', maxHeight: '100px' }}
          />
          <Box>
            <Typography variant="h3">PRIME</Typography>
            <Typography variant="h4">HOTTEST DEALS</Typography>
          </Box>
        </Stack>

        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 350px))"
          gap={4}
          justifyContent="center"
          sx={{ margin: '50px 0', padding: '10px' }}>
          <HottestDealCardComponent
            title="Deal 1"
            imageUrl="https://source.unsplash.com/random"
          />
          <HottestDealCardComponent
            title="Deal 2"
            imageUrl="https://source.unsplash.com/random"
          />
          <HottestDealCardComponent
            title="Deal 3"
            imageUrl="https://source.unsplash.com/random"
          />
          <HottestDealCardComponent
            title="Deal 4"
            imageUrl="https://source.unsplash.com/random"
          />
          <HottestDealCardComponent
            title="Deal 5"
            imageUrl="https://source.unsplash.com/random"
          />
          <HottestDealCardComponent
            title="Deal 6"
            imageUrl="https://source.unsplash.com/random"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
