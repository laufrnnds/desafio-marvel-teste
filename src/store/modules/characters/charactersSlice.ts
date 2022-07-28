/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { marvel } from '../../../services';

// 1 - DEFINIR QUAL O MOLDE DE DADOS QUE ESTARÁ SENDO GRAVADO NA STORE DO REDUX
export interface Character {
  id: string;
  name?: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
  description?: string;
  favorite?: boolean;
}

// 2 - CRIAR UM ADAPTER PARA O MOLDE DE DADOS
const adapter = createEntityAdapter<Character>({
  selectId: (character) => character.id,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.characters
);

export const getAll = createAsyncThunk('getAllCharacters', async () => {
  const response = await marvel.get('/characters');
  const { id, name, description, thumbnail } = response.data.results;
  const { path } = thumbnail;

  return { id, name, description, path };
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState: adapter.getInitialState({ loading: false }),
  reducers: {
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
