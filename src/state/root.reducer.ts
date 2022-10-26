import { combineReducers } from '@reduxjs/toolkit';
import { getItinerariesSlice } from './flight-search/get-itineraries.slice';
import { getLocationsSlice } from './flight-search/get-locations.slice';
import { searchParamsSlice } from './flight-search/search-params.slice';

const rootReducer = combineReducers({
  getLocationsState: getLocationsSlice.reducer,
  getItinerariesState: getItinerariesSlice.reducer,
  searchParamsState: searchParamsSlice.reducer,
});

export default rootReducer;
