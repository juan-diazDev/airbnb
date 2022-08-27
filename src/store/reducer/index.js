import { combineReducers } from 'redux';
import spaceReducer from './space';
import uiReducer from './ui';
import userReducer from './user';

const mainReducer = combineReducers({
  space: spaceReducer,
  user: userReducer,
  ui: uiReducer,
});

export default mainReducer;
