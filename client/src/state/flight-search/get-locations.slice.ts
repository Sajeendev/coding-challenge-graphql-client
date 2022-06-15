import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { envs } from '../../config/env-variables';
import { getErrorMessageFromRequest } from '../../utils/error.util';
import { AppThunk } from '../store';

/**
 * Initial state
 */
const initialLocationsState = {
  loading: false,
  data: [],
  error: '',
  success: false,
};

/**
 * Slice
 */
export const getLocationsSlice = createSlice({
  name: 'getLocationsSlice',
  initialState: initialLocationsState,
  reducers: {
    getLocationsRequest: state => {
      state.loading = true;
    },
    getLocationsSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = '';
      state.data = action.payload;
    },
    getLocationsFail: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
      state.data = [];
    },
  },
});

/**
 * Action
 */
const { getLocationsRequest, getLocationsSuccess, getLocationsFail } =
  getLocationsSlice.actions;
export const getLocationsAction =
  (): AppThunk => async (dispatch, getState) => {
    try {
      dispatch(getLocationsRequest());

      const response = await axios.get(`${envs.serverUrl}/locations`);
      console.log(response);
      if (response?.data) {
        dispatch(getLocationsSuccess(response.data));
      }
    } catch (error) {
      const errorMsg = getErrorMessageFromRequest(error);
      dispatch(getLocationsFail(errorMsg));
    }
  };
