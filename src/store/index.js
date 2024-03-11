import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./userSlice";

const store = configureStore({
  reducer: {
    auth: UserSlice.reducer,
  },
});
export default store;
