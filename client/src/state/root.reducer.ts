import { combineReducers } from '@reduxjs/toolkit';
import { getItinerariesSlice } from './flight-search/get-itineraries.slice';
import { getLocationsSlice } from './flight-search/get-locations.slice';

const rootReducer = combineReducers({
  getLocationsState: getLocationsSlice.reducer,
  getItinerariesState: getItinerariesSlice.reducer,
});

export default rootReducer;
