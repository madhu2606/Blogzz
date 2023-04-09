import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSclice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false,username:"h" ,admin:false},
  reducers: {
    signin(state) {
      state.isLoggedIn = true;
      state.username = localStorage.getItem("username");
      state.admin = JSON.parse(localStorage.getItem("isAdmin"))

    },
    
    logout(state) {
      localStorage.removeItem("userId");
      localStorage.removeItem("isAdmin");
      state.isLoggedIn = false;
      state.admin = false;
    },
  },
});

export const authActions = authSclice.actions;

export const store = configureStore({
  reducer: authSclice.reducer,
});
