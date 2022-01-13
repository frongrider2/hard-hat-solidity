import { combineReducers } from '@reduxjs/toolkit';
import profileReducer from './profile/reducer';
import loadingReducer from './loading/reducer';

export default combineReducers({
  profile: profileReducer,
  refreshing: loadingReducer,
});
