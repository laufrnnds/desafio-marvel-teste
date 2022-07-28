/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export type Series = {
  id: string;
  title: string;
  imgPath: string;
  description: string;
};

type initalState = {
  loading: boolean;
  comics: Series[];
  error: '';
};

const initialState: initalState = {
  loading: false,
  comics: [],
  error: '',
};

const serieSlice = createSlice({
  name: 'serie',
  initialState,
  reducers: {
    requestSerie(state) {
      state.loading = true;
    },
    createSerie(state, action) {
      state.loading = false;
      state.comics = action.payload;
      state.error = '';
    },
    requestSerieError(state, action) {
      state.loading = false;
      state.comics = [];
      state.error = action.payload;
    },
    clearSerie() {
      return initialState;
    },
  },
});

export const { createSerie, clearSerie, requestSerie, requestSerieError } =
  serieSlice.actions;
export default serieSlice.reducer;
