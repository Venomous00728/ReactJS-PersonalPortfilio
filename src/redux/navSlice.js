import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: "",
  tabSelected: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload;
    },
    setTabSelected: (state, action) => {
      state.tabSelected = action.payload;
    },
  },
});

export const { setTab } = navSlice.actions;
export const { setTabSelected } = navSlice.actions;

export const selectTab = (state) => state.nav.tab;
export const selectTabSelected = (state) => state.nav.tabSelected;

export default navSlice.reducer;
