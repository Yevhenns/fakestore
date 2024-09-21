import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {PERSIST, persistReducer, persistStore} from 'redux-persist';
import {productsReducer} from './products/productsSlice';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['allProducts'],
};

const rootReducer = combineReducers({
  allProducts: productsReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persist = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
