import React, { memo, useState } from "react";

export const SearchField = memo(() => {
  const [valueInp1, setValueInp1] = useState<string>("");
  const [valueInp2, setValueInp2] = useState<string>("");
  const [valueInp3, setValueInp3] = useState<string>("");

  const changeInput_1 = (e: React.FormEvent<HTMLInputElement>) => {
    setValueInp1(e.currentTarget.value);
  };

  const changeInput_2 = (e: any) => {
    setValueInp2(e.target.value);
  };

  const changeInput_3 = (e: string) => {
    setValueInp3(e);
  };

  return (
    <div>
      <input onChange={changeInput_1} value={valueInp1} />

      <input onChange={changeInput_2} value={valueInp2} />

      <input
        onChange={(e) => changeInput_3(e.target.value)}
        value={valueInp3}
      />
    </div>
  );
});
