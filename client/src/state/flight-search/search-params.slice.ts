import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

export interface ParamsDataInterface {
  departureLocation: string;
  departureDate: Date | null;
  arrivalLocation: string;
}

/**
 * Initial state
 */
const initialParamsState = {
  params: {} as ParamsDataInterface,
};

/**
 * Slice
 */
export const searchParamsSlice = createSlice({
  name: 'searchParamsSlice',
  initialState: initialParamsState,
  reducers: {
    setSearchParams: (state, action) => {
      state.params = action.payload;
    },
  },
});

/**
 * Action
 */
const { setSearchParams } = searchParamsSlice.actions;
export const searchParamsAction =
  (params: ParamsDataInterface): AppThunk =>
  async dispatch => {
    dispatch(setSearchParams(params));
  };
