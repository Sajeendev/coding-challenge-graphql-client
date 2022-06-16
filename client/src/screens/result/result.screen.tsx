import { Box, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import SearchBoxComponent from '../../components/search-box/search-box-component';
import { RectangularSkeletonComponent } from '../../components/skeletons/skeleton.component';
import { getLocationsAction } from '../../state/flight-search/get-locations.slice';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { globalProps } from '../../styles/global.props';
import { isEqualDates } from '../../utils/date.utils';
import ResultItemComponent from './result-item.component';

const ResultScreen = () => {
  const dispatch = useAppDispatch();
  /**
   * Global state
   */
  const getLocationsState = useAppSelector(state => state.getLocationsState);
  const {
    loading: locationLoading,
    success: locationSuccess,
    data: locationData,
  } = getLocationsState;

  const getItinerariesState = useAppSelector(
    state => state.getItinerariesState
  );
  const {
    loading: itinerariesLoading,
    success: itinerariesSuccess,
    data: itinerariesData,
  } = getItinerariesState;

  const searchParamsState = useAppSelector(state => state.searchParamsState);
  const { params } = searchParamsState;

  /**
   * Effects
   */
  useEffect(() => {
    // Avoid calling api for every pageload to optimize performance
    !locationSuccess && dispatch(getLocationsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationSuccess]);

  return (
    <Box sx={{ ...globalProps.box1200 }}>
      <Paper
        variant="outlined"
        elevation={0}
        sx={{
          ...globalProps.paperContainer,
          marginBottom: '20px',
        }}>
        <SearchBoxComponent
          locations={locationData}
          isLoading={locationLoading}
          isHomeScreen={false}
        />
      </Paper>

      {itinerariesLoading ? (
        <RectangularSkeletonComponent height={700} />
      ) : (
        itinerariesSuccess &&
        itinerariesData
          ?.filter(data =>
            params.departureLocation
              ? data?.departureLocation === params.departureLocation
              : data
          )
          ?.filter(data =>
            params.arrivalLocation
              ? data?.arrivalLocation === params.arrivalLocation
              : data
          )
          ?.filter(data =>
            params.departureDate
              ? isEqualDates(
                  data?.departureDate?.year,
                  data?.departureDate?.month,
                  data?.departureDate?.dayOfMonth,
                  params.departureDate
                )
              : data
          )
          .sort((a, b) => a.price - b.price)
          ?.map((data, i) => <ResultItemComponent data={data} key={i} />)
      )}
    </Box>
  );
};

export default ResultScreen;
