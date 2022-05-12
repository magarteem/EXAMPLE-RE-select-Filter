import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ReqestApiType } from "./type";

//ts createAsyncThunk (тип возращаемых данных(undefined если не передаём), тип входящих параметров, тип возвращ. ошибки )
export const getPostsListThunk = createAsyncThunk<
  ReqestApiType,
  number,
  { rejectValue: string }
>("filter/getFilterList", async function (postsNumber, { rejectWithValue }) {
  try {
    const response = await axios(
      `https://api.randomuser.me/?nat=US&results=${postsNumber}`
    ).then((res) => res.data);
    return response;
  } catch (error) {
    return rejectWithValue(`ошибка  в санке ${error}`);
  }
});
