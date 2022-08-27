import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import mainReducer from './reducer/index';

const middlewares = [thunk];

const initialState = {
  space: {},
  user: {
    userDetail: {},
  },
  ui: {
    error: null,
  },
};

const store = createStore(
  mainReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);

export default store;
