import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPostsList } from "./getDataThunc";
import { InitialStateType } from "./type";

const initialState: InitialStateType = {
  results: [],
  info: {
    seed: "",
    results: 3,
    page: 1,
    version: "",
  },
};

export const filterSlace = createSlice({
  name: "softWare",
  initialState,
  reducers: {},

  extraReducers: {
    [getPostsList.pending.type]: (state: InitialStateType) => {
      console.log("Идет загрузка");
    },
    [getPostsList.fulfilled.type]: (
      state: InitialStateType,
      action: PayloadAction<InitialStateType>
    ) => {
      console.log("1111111111");
      state = action.payload;
      console.log(action.payload);
    },
    [getPostsList.rejected.type]: (
      state: InitialStateType,
      action: PayloadAction<InitialStateType>
    ) => {
      console.log("Error");
    },
  },
});

export const {} = filterSlace.actions;
export default filterSlace.reducer;
