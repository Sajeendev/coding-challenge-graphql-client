import {
  Button,
  Grid,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppUrlEnum } from '../../routes/app-url.enum';
import { getItinerariesAction } from '../../state/flight-search/get-itineraries.slice';
import { searchParamsAction } from '../../state/flight-search/search-params.slice';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { RectangularSkeletonComponent } from '../skeletons/skeleton.component';
import LocationDropDownListComponant from './location-drop-down-list-componant';

interface PropTypes {
  locations: string[];
  isLoading: boolean;
  isHomeScreen: boolean;
}

const SearchBoxComponent = ({
  locations,
  isLoading,
  isHomeScreen,
}: PropTypes) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  /**
   * Global state
   */
  const searchParamsState = useAppSelector(state => state.searchParamsState);
  const { params: searchParams } = searchParamsState;

  /**
   * Local state
   */
  const [params, setParams] = useState({
    departureLocation: searchParams.departureLocation,
    departureDate: searchParams.departureDate,
    arrivalLocation: searchParams.arrivalLocation,
  });

  /**
   * Handlers
   */
  const handleChangeDepartureLocation = (event: SelectChangeEvent) => {
    setParams({ ...params, departureLocation: event.target.value });
  };

  const handleChangeArrivalLocation = (event: SelectChangeEvent) => {
    setParams({ ...params, arrivalLocation: event.target.value });
  };

  const handleChangeDepartureDate = (newValue: any) => {
    setParams({ ...params, departureDate: newValue });
  };

  const handleSearch = useCallback(() => {
    isHomeScreen && navigate(AppUrlEnum.Result);
    dispatch(searchParamsAction(params));
    dispatch(getItinerariesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={3}>
        {isLoading ? (
          <RectangularSkeletonComponent height={40} />
        ) : (
          <LocationDropDownListComponant
            label="Departure"
            value={params.departureLocation}
            locations={locations}
            handleChange={handleChangeDepartureLocation}
          />
        )}
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        {isLoading ? (
          <RectangularSkeletonComponent height={40} />
        ) : (
          <LocationDropDownListComponant
            label="Arrival"
            value={params.arrivalLocation}
            locations={locations}
            handleChange={handleChangeArrivalLocation}
          />
        )}
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            // disablePast
            label="Departure date"
            inputFormat={'dd/MM/yyyy'}
            value={params.departureDate}
            onChange={handleChangeDepartureDate}
            renderInput={params => (
              <TextField
                {...params}
                size="small"
                fullWidth
                data-testid="search-date-picker-departure"
              />
            )}
          />
        </LocalizationProvider>
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <Button
          fullWidth
          variant="contained"
          onClick={handleSearch}
          disabled={isLoading}>
          <Typography sx={{ textTransform: 'none' }}>
            {isLoading
              ? 'Loading...'
              : isHomeScreen
              ? 'Search'
              : 'Change search'}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBoxComponent;
