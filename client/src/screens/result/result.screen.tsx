import { Box, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import SearchBoxComponent from '../../components/search-box/search-box-component';
import { getLocationsAction } from '../../state/flight-search/get-locations.slice';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { globalProps } from '../../styles/global.props';

const ResultScreen = () => {
  const dispatch = useAppDispatch();
  /**
   * Global state
   */
  const getLocationsState = useAppSelector(state => state.getLocationsState);
  const { loading, success, data } = getLocationsState;

  const getItinerariesState = useAppSelector(
    state => state.getItinerariesState
  );
  const {
    loading: ItinerariesLoading,
    success: ItinerariesSuccess,
    data: ItinerariesData,
  } = getItinerariesState;

  /**
   * Effects
   */
  useEffect(() => {
    // Avoid calling api for every pageload to optimize performance
    !success && dispatch(getLocationsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <Box sx={{ ...globalProps.box1200 }}>
      <Paper
        elevation={0}
        sx={{
          ...globalProps.paperContainer,
        }}>
        <SearchBoxComponent
          locations={data}
          isLoading={loading}
          isHomeScreen={false}
        />
      </Paper>
    </Box>
  );
};

export default ResultScreen;
