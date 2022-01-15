// vendors
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import { userInfo } from './userReducer';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['userInfo'],
};

const rootReducer = combineReducers({ userInfo });

export default persistReducer(persistConfig, rootReducer);
