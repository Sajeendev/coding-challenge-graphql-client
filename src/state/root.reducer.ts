import { combineReducers } from '@reduxjs/toolkit';
import { getItinerariesSlice } from './flight-search/get-itineraries.slice';

import { searchParamsSlice } from './flight-search/search-params.slice';

const rootReducer = combineReducers({
  getItinerariesState: getItinerariesSlice.reducer,
  searchParamsState: searchParamsSlice.reducer,
});

export default rootReducer;
