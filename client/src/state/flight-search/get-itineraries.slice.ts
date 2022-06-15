import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { envs } from '../../config/env-variables';
import { getErrorMessageFromRequest } from '../../utils/error.util';
import { AppThunk } from '../store';

/**
 * Data
 */
export interface DateResponseInterface {
  year: number;
  month: number;
  dayOfMonth: number;
  hourOfDay: number;
  minute: number;
  second: number;
}

export interface ItineraryDataInterface {
  arrivalDate: DateResponseInterface;
  departureDate: DateResponseInterface;
  arrivalLocation: string;
  departureLocation: string;
  carrier: string;
  price: number;
}

/**
 * Initial state
 */
const initialItinerariesState = {
  loading: false,
  data: [] as ItineraryDataInterface[],
  error: '',
  success: false,
};

/**
 * Slice
 */
export const getItinerariesSlice = createSlice({
  name: 'getItinerariesSlice',
  initialState: initialItinerariesState,
  reducers: {
    getItinerariesRequest: state => {
      state.loading = true;
    },
    getItinerariesSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = '';
      state.data = action.payload;
    },
    getItinerariesFail: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.data = initialItinerariesState.data;
    },
  },
});

/**
 * Action
 */
const { getItinerariesRequest, getItinerariesSuccess, getItinerariesFail } =
  getItinerariesSlice.actions;
export const getItinerariesAction =
  (): AppThunk => async (dispatch, getState) => {
    try {
      dispatch(getItinerariesRequest());

      const response = await axios.get(`${envs.serverUrl}/itineraries`);
      if (response?.data) {
        dispatch(getItinerariesSuccess(response.data));
      }
    } catch (error) {
      const errorMsg = getErrorMessageFromRequest(error);
      dispatch(getItinerariesFail(errorMsg));
    }
  };
