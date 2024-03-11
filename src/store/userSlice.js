import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
  name: "user",
  initialState: { users: [] },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    removeUser(state) {
      state.users = null;
    },
  },
});

export default UserSlice;

export const userAction = UserSlice.actions;
