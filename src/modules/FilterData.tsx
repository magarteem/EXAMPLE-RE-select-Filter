import { memo } from "react";
import { InitialStateType, ResultType } from "./type";

interface FilterDataType {
  listData: InitialStateType;
}

export const FilterData: React.FC<FilterDataType> = memo((listData) => {
  //console.log(listData);
  return <div></div>;
});
