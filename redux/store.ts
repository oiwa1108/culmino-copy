import { createStore, Store } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store: Store;
export default () => {
  store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
export { store };
