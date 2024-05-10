import { configureStore } from "@reduxjs/toolkit";
import evaluateSlice from "@/store/slice/evaluateSlice";
import quizSlice from "./slice/quizSlice";

const store = configureStore({
  reducer: {
    evaluate: evaluateSlice,
    quiz: quizSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
