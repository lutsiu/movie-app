import { createSlice } from "@reduxjs/toolkit";

const init: number[] = [];

interface Action {
  payload: { id: number };
}

const localStorageKey = "watchlistData"; // Key for storing the watchlist data in local storage

const getStoredWatchlistData = () => {
  const storedData = localStorage.getItem(localStorageKey);
  return storedData ? JSON.parse(storedData) : init;
};

const saveWatchlistData = (data: number[]) => {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
};

const watchlistSlice = createSlice({
  initialState: getStoredWatchlistData(),
  name: "watchlist",
  reducers: {
    addMovie(state, action: Action) {
      const { id } = action.payload;
      const updatedState: number[] = [id, ...state];
      saveWatchlistData(updatedState);
      return updatedState;
    },
    removeMovie(state, action: Action) {
      const { id } = action.payload;
      const updatedState: number[] = state.filter((movie:number) => movie !== id);
      saveWatchlistData(updatedState);
      return updatedState;
    },
  },
});

export const watchlistActions = watchlistSlice.actions;
export const watchlistReducer = watchlistSlice.reducer;