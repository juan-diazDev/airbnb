import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import mainReducer from './reducer/index';

const initialState = {
  Space: {},
  auth: {},
};

const store = createStore(
  initialState,
  mainReducer,
  composeWithDevTools(),
);

export default store;
