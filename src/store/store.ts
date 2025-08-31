import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice";
import hisotryReducer from "./features/historySlice";
import settingReducer from "./features/settingSlice";
import shortcutkeyReducer from "./features/shortcutkey";
import queryReducer from "./features/querySlice";
export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    history: hisotryReducer,
    setting: settingReducer,
    shortcutkey: shortcutkeyReducer,
    query: queryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
