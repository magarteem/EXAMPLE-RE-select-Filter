import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { FilterData } from "./modules/FilterData";
import { getPostsList } from "./modules/getDataThunc";
import { SearchField } from "./modules/SearchField";
import { InitialStateType, ResultType } from "./modules/type";

function App() {
  const dispatch = useAppDispatch();
  const listData = useAppSelector((state) => state.filterSlaceRebuser.results);
  const [listDataPosts, setListDataPosts] = useState(dispatch(getPostsList(2)));

  //useEffect(() => {
  //  dispatch(getPostsList(2));
  //}, [dispatch]);

  return (
    <div>
      <SearchField />
      {/*<FilterData listData={listDataPosts} />*/}
    </div>
  );
}

export default App;
