import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { marvel } from '../../../services';

export type Comic = {
  id: string;
  name: string;
  imgPath: string;
  price: number;
};

const adapter = createEntityAdapter<Comic>({ selectId: (item) => item.id });

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.comics
);

export const getAll = createAsyncThunk('getAllComics', async () => {
  const response = await marvel.get('/comics');
  return response.data.results;
});
// /* eslint-disable no-param-reassign */
// import { createSlice } from '@reduxjs/toolkit';

// export type Comics = {
//   id: string;
//   name: string;
//   imgPath: string;
//   price: number;
// };

// type initalState = {
//   loading: boolean;
//   comics: Comics[];
//   error: '';
// };

// const initialState: initalState = {
//   loading: false,
//   comics: [],
//   error: '',
// };

// const comicSlice = createSlice({
//   name: 'comic',
//   initialState,
//   reducers: {
//     requestComic(state) {
//       state.loading = true;
//     },
//     createComic(state, action) {
//       state.loading = false;
//       state.comics = action.payload;
//       state.error = '';
//     },
//     requestComicError(state, action) {
//       state.loading = false;
//       state.comics = [];
//       state.error = action.payload;
//     },
//     clearComic() {
//       return initialState;
//     },
//   },
// });

// export const { createComic, clearComic, requestComic, requestComicError } =
//   comicSlice.actions;
// export default comicSlice.reducer;
