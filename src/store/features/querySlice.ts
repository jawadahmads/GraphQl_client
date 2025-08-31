import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>): string => {
      return (state = action.payload);
    },
  },
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
