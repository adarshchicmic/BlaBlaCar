import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {MMKV} from 'react-native-mmkv';
import {api} from '../services/api';
import rideSlice from './slices/rideSlice';
import profileSlice from './slices/profileSlice';
import preferencesSlice from './slices/travelPreferences';
import vehicleSlice from './slices/vehicleSlice';
import publishRideSlice from './slices/publishRideSlice';
import searchSlice from './slices/searchSlice';

import userSlice from './slices/UserSlice';
const reducers = combineReducers({
  userSlice: userSlice.reducer,
  rideSlice: rideSlice.reducer,
  [api.reducerPath]: api.reducer,
  profileSlice: profileSlice.reducer,
  preferencesSlice: preferencesSlice.reducer,
  vehicleSlice: vehicleSlice.reducer,
  publishRideSlice: publishRideSlice.reducer,
  searchSlice: searchSlice.reducer,
});
const storage = new MMKV();
export const reduxStorage = {
  setItem: (key: any, value: any) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: any) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: any) => {
    storage.delete(key);
    return Promise.resolve();
  },
};
const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['theme', 'auth', 'userSlice', 'profileSlice', 'searchSlice'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);
    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }
    return middlewares;
  },
});
const persistor = persistStore(store);
setupListeners(store.dispatch);
export {store, persistor};
