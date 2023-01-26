import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  clearPokemons,
  pokemonSortExperienceAsync,
  pokemonSortHeightAsync,
  pokemonSortNameAsync,
  pokemonSortWeightAsync,
} from "../features/pokemon/pokemonSlice";
import style from "../styles/PokemonsSort.module.css";
import { AppDispatch } from "../app/store";

const PokemonsSort = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [submitType, setSubmitType] = useState(0);
  const [sort, setSort] = useState({
    name: "",
    height: "",
    weight: "",
    experience: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    type: string
  ) => {
    if (type === "name") {
      setSort({ name: e.target.value, height: "", weight: "", experience: "" });
      setSubmitType(0);
    }

    if (type === "height") {
      setSort({ name: "", height: e.target.value, weight: "", experience: "" });
      setSubmitType(1);
    }

    if (type === "weight") {
      setSort({ name: "", height: "", weight: e.target.value, experience: "" });
      setSubmitType(2);
    }

    if (type === "experience") {
      setSort({ name: "", height: "", weight: "", experience: e.target.value });
      setSubmitType(3);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(clearPokemons());
    if (submitType === 0) {
      setTimeout(() => {
        dispatch(pokemonSortNameAsync(sort.name));
      }, 1000);
    } else if (submitType === 1) {
      setTimeout(() => {
        dispatch(pokemonSortHeightAsync(sort.height));
      }, 1000);
    } else if (submitType === 2) {
      setTimeout(() => {
        dispatch(pokemonSortWeightAsync(sort.weight));
      }, 1000);
    } else if (submitType === 3) {
      setTimeout(() => {
        dispatch(pokemonSortExperienceAsync(sort.experience));
      }, 1000);
    }
  };
  return (
    <form
      className={style.pokemons_sort_container}
      onSubmit={(e) => handleSubmit(e)}
    >
      <span className={style.select_title}>
        Select just one sort before submit
      </span>
      <div className={style.select_container}>
        <select
          className={style.select_items}
          onChange={(e) => handleChange(e, "name")}
        >
          <option>Name</option>
          <option value="AZ">AZ</option>
          <option value="ZA">ZA</option>
        </select>
      </div>
      <div className={style.select_container}>
        <select
          className={style.select_items}
          onChange={(e) => handleChange(e, "height")}
        >
          <option>Height</option>
          <option value="LOWHEIGHT">LOWHEIGHT</option>
          <option value="HEIGHTLOW">HEIGHTLOW</option>
        </select>
      </div>
      <div className={style.select_container}>
        <select
          className={style.select_items}
          onChange={(e) => handleChange(e, "weight")}
        >
          <option>Weight</option>
          <option value="LOWWEIGHT">LOWWEIGHT</option>
          <option value="WEIGHTLOW">WEIGHTLOW</option>
        </select>
      </div>
      <div className={style.select_container}>
        <select
          className={style.select_items}
          onChange={(e) => handleChange(e, "experience")}
        >
          <option>Base experience</option>
          <option value="LOWEXPERIENCE">LOWEXPERIENCE</option>
          <option value="EXPERIENCELOW">EXPERIENCELOW</option>
        </select>
      </div>
      <div className={style.submit_container}>
        <input type="submit" value="Sort" className={style.submit} />
      </div>
    </form>
  );
};

export default PokemonsSort;
