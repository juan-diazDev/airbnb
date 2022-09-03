import { combineReducers } from 'redux';
import spaceReducer from './space';
import uiReducer from './ui';
import userReducer from './user';
import checkoutReducer from './checkout';

const mainReducer = combineReducers({
  space: spaceReducer,
  user: userReducer,
  ui: uiReducer,
  checkout: checkoutReducer,
});

export default mainReducer;
