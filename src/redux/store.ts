import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./featuers/cartSlice";
import RegisterReducer from "./featuers/registerSlice";
import { baseApi } from "./api/baseApi";
// ...

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: createReducer,
    register: RegisterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
