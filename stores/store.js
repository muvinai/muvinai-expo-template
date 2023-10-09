import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, createMigrate } from 'redux-persist';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Reducers
import loaderReducer from "./loader";
import userReducer from './user';


// Combinación de Reducers
const rootReducer = combineReducers({
    loader: loaderReducer,
    userInfo: userReducer,
})

// Configuración de Persistencia
const persistConfig = {
    key: 'persist',
    storage: AsyncStorage,
    whitelist: ['user'],  // Los stores que se persisten
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({  
  reducer: persistedReducer, 
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    inmutableCheck: {warnAfter: 400}, 
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], //No se chequean estos tipos de acciones
      warnAfter: 400,
    } 
  })
});

export const persistor = persistStore(store);
export default store;