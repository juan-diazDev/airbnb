import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import mainReducer from './reducer/index';

const middlewares = [thunk];

const initialState = {
  space: {
    spaceRegister: {},
    spaceList: [],
    spaceDetail: null,
    query: '',
    filteredSpaces: [],
  },
  user: {
    userDetail: {},
  },
  ui: {
    error: null,
  },
  checkout: {
    checkoutForm: {},
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
