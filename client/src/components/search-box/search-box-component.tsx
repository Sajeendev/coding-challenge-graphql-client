import {
  Button,
  Grid,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppUrlEnum } from '../../routes/app-url.enum';
import { getItinerariesAction } from '../../state/flight-search/get-itineraries.slice';
import { searchParamsAction } from '../../state/flight-search/search-params.slice';
import { useAppDispatch } from '../../state/store';
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
   * Local state
   */
  const [params, setParams] = useState({
    departureLocation: '',
    departureDate: null,
    arrivalLocation: '',
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

  const handleSearch = useCallback(() => {
    isHomeScreen && navigate(AppUrlEnum.Result);
    dispatch(searchParamsAction(params));
    dispatch(getItinerariesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
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
      <Grid item xs={12} sm={3}>
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
      <Grid item xs={12} sm={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Departure date"
            value={params.departureDate}
            disablePast
            onChange={newValue => {
              setParams({ ...params, departureDate: newValue });
            }}
            renderInput={params => (
              <TextField size="small" fullWidth {...params} />
            )}
          />
        </LocalizationProvider>
      </Grid>

      <Grid item xs={12} sm={3}>
        <Button fullWidth variant="contained" onClick={handleSearch}>
          <Typography sx={{ textTransform: 'none' }}>
            {isHomeScreen ? 'Search' : 'Change search'}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBoxComponent;
