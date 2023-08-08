import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../todos/todoSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const middleWare = getDefaultMiddleware({ serializableCheck: false });

const persistedReducer = persistReducer(persistConfig, todoSlice.reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWare,
});

export const persistor = persistStore(store);

export default store;
