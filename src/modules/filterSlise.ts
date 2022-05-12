import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPostsListThunk } from "./getDataThunc";
import { InitialStateType } from "./type";

const initialState: InitialStateType = {
  reqestData: null,
  isLoading: false,
  error: null,
};

export const filterSlace = createSlice({
  name: "softWare",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getPostsListThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPostsListThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reqestData = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

export const {} = filterSlace.actions;
export default filterSlace.reducer;
