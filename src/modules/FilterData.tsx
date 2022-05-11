import { memo } from "react";
import { ReqestApiType } from "./type";

interface FilterDataType {
  reqestData: ReqestApiType | null;
}

export const FilterData: React.FC<FilterDataType> = memo((reqestData) => {
  //console.log(reqestData.reqestData);
  return <div>FilterData</div>;
});
