import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import mainReducer from './reducer/index';

const initialState = {
  space: {},
};

const store = createStore(
  mainReducer,
  initialState,
  composeWithDevTools(),
);

export default store;
