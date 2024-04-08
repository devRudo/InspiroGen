import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userInfo: null,
  language: "en",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },

    clearUser: (state) => {
      state.token = null;
      state.userInfo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo, setToken, clearUser, setLanguage } =
  userSlice.actions;

export default userSlice.reducer;
