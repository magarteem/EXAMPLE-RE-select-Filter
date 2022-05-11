import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostsList = createAsyncThunk(
  "filter/getFilterList",
  async function (postsNumber: number, { rejectWithValue }) {
    try {
      const response = await axios(
        `https://api.randomuser.me/?nat=US&results=${postsNumber}`
      ).then((res) => res.data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// AxiosResponse
