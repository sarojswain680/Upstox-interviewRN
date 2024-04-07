import {combineReducers} from '@reduxjs/toolkit';
import holdingListReducer from '../Reducer/slices/holdingListSlice';

const rootReducer = combineReducers({
  holdingList: holdingListReducer,
});

export default rootReducer;
