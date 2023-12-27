import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import categoriesReducer from "./categories/categoriesSlice"
import persistStore from "redux-persist/lib/persistStore";
import productsReducer from './products/productsSlice';
import destacadoReducer from './destacados/destacadosSlice';
import cartReducer from './cart/cartSlice';
import filterReducer from './filter/filterSlice';
import menuReducer from './menu/menuSlice';


const reducers = combineReducers({
  destacado: destacadoReducer,
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  filter: filterReducer,
  menu: menuReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);