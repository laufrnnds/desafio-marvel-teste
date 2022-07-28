import { combineReducers } from '@reduxjs/toolkit';

import characters from './characters/charactersSlice';

import likes from './likes/LikesSlice';

export const rootReducer = combineReducers({
  characters,
  likes,
});
