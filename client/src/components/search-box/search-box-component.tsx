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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppUrlEnum } from '../../routes/app-url.enum';
import { RectangularSkeletonComponent } from '../skeletons/skeleton.component';
import LocationDropDownListComponant from './location-drop-down-list-componant';

interface PropTypes {
  locations: string[];
  isLoading: boolean;
  searchButtonLabel: string;
}

const SearchBoxComponent = ({
  locations,
  isLoading,
  searchButtonLabel,
}: PropTypes) => {
  const navigate = useNavigate();

  /**
   * Local state
   */
  const [departureLocation, setDepartureLocation] = useState('');
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [arrivalLocation, setArrivalLocation] = useState('');

  /**
   * Handlers
   */
  const handleChangeDepartureLocation = (event: SelectChangeEvent) => {
    setDepartureLocation(event.target.value);
  };

  const handleChangeArrivalLocation = (event: SelectChangeEvent) => {
    setArrivalLocation(event.target.value);
  };

  const handleSearch = () => {
    navigate(AppUrlEnum.Search);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        {isLoading ? (
          <RectangularSkeletonComponent height={40} />
        ) : (
          <LocationDropDownListComponant
            label="Departure"
            value={departureLocation}
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
            value={arrivalLocation}
            locations={locations}
            handleChange={handleChangeArrivalLocation}
          />
        )}
      </Grid>
      <Grid item xs={12} sm={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Departure date"
            value={departureDate}
            disablePast
            onChange={newValue => {
              setDepartureDate(newValue);
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
            {searchButtonLabel}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBoxComponent;
