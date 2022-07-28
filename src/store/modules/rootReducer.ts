import { combineReducers } from '@reduxjs/toolkit';

import comic from './comics/comicSlice';

import characters from './characters/charactersSlice';

import { likeReducer } from './likes/reducer';

export const rootReducer = combineReducers({
  comic,
  characters,
  likeReducer,
});
