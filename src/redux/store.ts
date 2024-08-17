import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./featuers/cartSlice";
import registerReducer from "./featuers/registerSlice";
import loginReducer from "./featuers/loginSlice";
import { baseApi } from "./api/baseApi";
// ...

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
    register: registerReducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
