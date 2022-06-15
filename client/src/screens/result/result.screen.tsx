import { Box, Paper, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import SearchBoxComponent from '../../components/search-box/search-box-component';
import { getLocationsAction } from '../../state/flight-search/get-locations.slice';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { globalProps } from '../../styles/global.props';
import { isEqualDates } from '../../utils/date.utils';

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
    loading: ItinerariesLoading,
    success: ItinerariesSuccess,
    data: ItinerariesData,
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
      <Stack spacing={1}>
        <Paper
          elevation={0}
          sx={{
            ...globalProps.paperContainer,
          }}>
          <SearchBoxComponent
            locations={locationData}
            isLoading={locationLoading}
            isHomeScreen={false}
          />
        </Paper>

        {ItinerariesData?.filter(data =>
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
          ?.map((data, i) => (
            <Paper elevation={0} sx={{ ...globalProps.paperContainer }} key={i}>
              <h4>{data?.departureLocation}</h4>
              <h4>{data?.arrivalLocation}</h4>
              <h4>
                {data?.departureDate?.year}-{data?.departureDate?.month + 1}-
                {data?.departureDate?.dayOfMonth}
              </h4>
            </Paper>
          ))}
      </Stack>
    </Box>
  );
};

export default ResultScreen;
