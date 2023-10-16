import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLeftMenu: false,
  showRightMenu: false,
}

const menuIconsSlice = createSlice({
  'name' : 'menu icons',
  'initialState': initialState,
  reducers: {
    toggleLeftMenu(state) {
      state.showLeftMenu = !state.showLeftMenu;
      console.log('toggle');
      console.log(state.showLeftMenu);
    },
    toggleRightMenu(state) {
      state.showRightMenu = !state.showRightMenu;
      console.log('toggle');
      console.log(state.showRightMenu);
    }  
  }
});

export const menuIconsReducer = menuIconsSlice.reducer;
export const menuIconsActions = menuIconsSlice.actions;