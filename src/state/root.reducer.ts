import { combineReducers } from '@reduxjs/toolkit';

import { searchParamsSlice } from './flight-search/search-params.slice';

const rootReducer = combineReducers({
  searchParamsState: searchParamsSlice.reducer,
});

export default rootReducer;
