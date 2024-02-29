import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "./GameSlice";

const store = configureStore({
  reducer: GameSlice,
});

export default store;
