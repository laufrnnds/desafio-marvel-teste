/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { marvel } from '../../../services';

export interface Character {
  id: string;
  name?: string;
  imgPath?: string;
  description?: string;
  favorite?: boolean;
}

const adapter = createEntityAdapter<Character>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.characters
);

export const getAll = createAsyncThunk('getAllCharacters', async () => {
  const response = await marvel.get('/characters');
  return response.data.results;
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState: adapter.getInitialState({ loading: false }),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
    setAll: adapter.setAll,
    upsertOne: adapter.upsertOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(getAll.rejected, (state, action) => {
        console.log('DEU ERRO');
      });
  },
});

export const { upsertOne } = charactersSlice.actions;
export default charactersSlice.reducer;
