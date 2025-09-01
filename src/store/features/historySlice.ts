import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";
export interface History {
  id: number;
  query: string;
  save: boolean;
  lable?: string;
}

interface PayLoadEdit {
  id: number;
  lable: string;
}

const initialState: History[] = [];

const HistorySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    deleteHistory: (state, actions: PayloadAction<number>): History[] => {
      return state.filter((element: History) => {
        return element.id !== actions.payload;
      });
    },

    createHistory: (state, action: PayloadAction<History>): History[] => {
      state = [...state, action.payload];
      return state;
    },

    editLable: (state, actions: PayloadAction<PayLoadEdit>): History[] => {
      return state.map((element: History) => {
        if (element.id === actions.payload.id) {
          return { ...element, lable: actions.payload.lable };
        }

        return element;
      });
    },

    toggleSave: (state, actions: PayloadAction<number>): History[] => {
      return state.map((element) => {
        if (element.id === actions.payload) {
          return { ...element, save: !element.save };
        }

        return element;
      });
    },

    clearAll: (state): History[] => {
      return state.filter((element: History) => {
        return element.save;
      });
    },
  },
});

export const { deleteHistory, toggleSave, editLable, clearAll, createHistory } =
  HistorySlice.actions;

export default HistorySlice.reducer;
