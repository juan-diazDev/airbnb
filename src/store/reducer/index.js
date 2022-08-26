import { combineReducers } from 'redux';
import spaceReducer from './space';
import userReducer from './user';

const mainReducer = combineReducers({
  space: spaceReducer,
  user: userReducer,
});

export default mainReducer;
