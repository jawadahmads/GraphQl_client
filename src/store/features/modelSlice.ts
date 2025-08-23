import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    settingModel: (state): string => {
      return (state = "setting");
    },
    shortcutkeyModel: (state): string => {
      return (state = "shortcutkey");
    },

    setEmpty: (state): string => {
      return (state = "");
    },
  },
});

export const { settingModel, shortcutkeyModel, setEmpty } = modelSlice.actions;

export default modelSlice.reducer;
