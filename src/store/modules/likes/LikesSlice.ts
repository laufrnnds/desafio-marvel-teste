/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../characters/charactersSlice';

interface InitialState {
  contador: number;
  favoritos: Character[];
}

const initialState: InitialState = {
  contador: 0,
  favoritos: [],
};

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    adicionaUm(state, action: PayloadAction<Character>) {
      state.contador += 1;
      state.favoritos = [...state.favoritos, action.payload];
    },
    removeUm(state, action: PayloadAction<string>) {
      const idFind = state.favoritos.findIndex(
        (item) => item.id === action.payload
      );
      state.favoritos.splice(idFind, 1);
      state.contador -= 1;
    },
  },
});

export const { adicionaUm, removeUm } = likesSlice.actions;
export default likesSlice.reducer;
