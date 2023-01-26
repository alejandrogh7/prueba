import { useState } from "react";
import PokemonsFilters from "../containers/PokemonsFilters";
import PokemonsSort from "../containers/PokemonsSort";
import style from "../styles/FilterSort.module.css";

const FilterSort = () => {
  const [filterSort, setFilterSort] = useState<number>(0);
  return (
    <section className={style.filter_sort_container}>
      <span className={style.app_title}>Pokemon APP</span>
      <div className={style.filter_sort}>
        <span onClick={() => setFilterSort(0)}>Filter</span>
        <span onClick={() => setFilterSort(1)}>Sort</span>
      </div>
      {!filterSort ? <PokemonsFilters /> : <PokemonsSort />}
    </section>
  );
};

export default FilterSort;
