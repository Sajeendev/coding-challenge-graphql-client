import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';

interface PropTypes {
  label: string;
  value: string;
  locations: string[];
  handleChange: (event: SelectChangeEvent) => void;
}

const LocationDropDownListComponant = ({
  label,
  value,
  locations,
  handleChange,
}: PropTypes) => {
  return (
    <FormControl
      size="small"
      fullWidth
      data-testid={`search-dropdown-${label.toLocaleLowerCase()}`}>
      <InputLabel id={`id-${label}`}>{label}</InputLabel>
      <Select
        labelId={`id-${label}`}
        value={value}
        label={label}
        onChange={handleChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {locations?.map((location, i) => {
          return (
            <MenuItem value={location} key={i}>
              {location}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default LocationDropDownListComponant;
