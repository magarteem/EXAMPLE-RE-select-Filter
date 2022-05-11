import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const re_selectFilterForCountry = createSelector(
  (state: RootState) => [state.filterSlaceRebuser.results],
  (items) => {
    return items;
  }
);
