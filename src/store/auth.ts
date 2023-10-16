import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  logIn: false
}

const authSlice = createSlice({
  'name': 'log',
  'initialState': initialState,
  reducers: {
    logIn(state) {
      state.logIn = true; 
    },
    logOut(state) {
      state.logIn = false;
    }
  }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;