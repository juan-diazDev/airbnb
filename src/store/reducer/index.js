import { combineReducers } from 'redux';
import spaceReducer from './space';

const mainReducer = combineReducers({
  space: spaceReducer,
});

export default mainReducer;
