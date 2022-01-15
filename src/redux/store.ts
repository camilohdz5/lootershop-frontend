// Vendors
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import reducer from './reducers';

// create store
const middlewares: any = [logger];
const initialState: any = {
  TestInit: {
    lastName: 'hernandez',
  },
};

export const store = createStore(reducer, initialState, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
