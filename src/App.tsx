import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/app/hooks";
import { FilterData } from "./modules/FilterData";
import { getPostsListThunk } from "./modules/getDataThunc";
import { SearchField } from "./modules/SearchField";

function App() {
  const dispatch = useAppDispatch();
  const { reqestData, isLoading, error } = useAppSelector(
    (state) => state.filterSlaceRebuser
  );

  useEffect(() => {
    dispatch(getPostsListThunk(10));
  }, [dispatch]);

  console.log("render App");

  return (
    <div>
      <SearchField />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error = {error}</h1>}
      <FilterData reqestData={reqestData} />
    </div>
  );
}

export default App;
