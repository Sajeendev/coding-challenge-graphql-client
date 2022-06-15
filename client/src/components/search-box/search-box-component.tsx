import { Button, Grid, SelectChangeEvent, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import { RectangularSkeletonComponent } from '../skeletons/skeleton.component';
import LocationDropDownListComponant from './location-drop-down-list-componant';

interface PropTypes {
  locations: string[];
  isLoading: boolean;
}

const SearchBoxComponent = ({ locations, isLoading }: PropTypes) => {
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

  const handleSearch = () => {};

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
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
      <Grid item xs={12} sm={4}>
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
      <Grid item xs={12} sm={4}>
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

      <Grid item xs={12} sm={8} />
      <Grid item xs={12} sm={4}>
        <Button
          fullWidth
          variant="contained"
          color="info"
          onClick={handleSearch}
          sx={{ minWidth: '150px' }}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBoxComponent;
