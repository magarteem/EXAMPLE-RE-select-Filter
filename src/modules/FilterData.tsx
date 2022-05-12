import { memo } from "react";
import { ReqestApiType } from "./type";

interface FilterDataType {
  reqestData: ReqestApiType | null;
}

export const FilterData: React.FC<FilterDataType> = memo((reqestData) => {
  console.log(reqestData.reqestData);
  return (
    <div>
      <h1>FilterData</h1>
      {reqestData.reqestData?.results.map((x) => (
        <p key={x.email}>{x.email}</p>
      ))}
    </div>
  );
});
