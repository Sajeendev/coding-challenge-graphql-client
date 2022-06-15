import { combineReducers } from '@reduxjs/toolkit';
import { getLocationsSlice } from './flight-search/get-locations.slice';

const rootReducer = combineReducers({
  getLocationsState: getLocationsSlice.reducer,
});

export default rootReducer;
