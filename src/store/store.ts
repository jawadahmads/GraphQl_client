import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice";
import hisotryReducer from "./features/historySlice";
import modelReducer from "./features/modelSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    history: hisotryReducer,
    model: modelReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
