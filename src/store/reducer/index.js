import { combineReducers } from 'redux';
import spaceReducer from './space';

const mainReducer = combineReducers({
  space: spaceReducer,
  /* registerForm: setSpaceReducer, */
});

export default mainReducer;
