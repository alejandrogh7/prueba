import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
  clearPokemons,
  pokemonNameAsync,
  pokemonHeightAsync,
  pokemonWeightAsync,
  pokemonExperienceAsync,
  pokemonTypeAsync,
  pokemonMoveAsync,
} from "../features/pokemon/pokemonSlice";
import {
  typesAsync,
  selectTypes,
} from "../features/pokemonTypes/pokemonTypesSlice";
import {
  movesAsync,
  selectMoves,
} from "../features/pokemonMoves/pokemonMovesSlice";
import { AppDispatch } from "../app/store";
import style from "../styles/PokemonsFilters.module.css";

const PokemonsFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const moves = useSelector(selectMoves);
  const types = useSelector(selectTypes);
  const [submitFilter, setSubmitFilter] = useState({
    name: false,
    height: false,
    weight: false,
    experience: false,
    move: false,
    type: false,
  });
  const [filters, setFilters] = useState({
    name: "",
    height: "",
    weight: "",
    experience: "",
    move: "",
    type: "",
  });

  useEffect(() => {
    dispatch(movesAsync());
    dispatch(typesAsync());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    type: number
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    if (type === 0) {
      setSubmitFilter({ ...submitFilter, name: true });
    } else if (type === 1) {
      setSubmitFilter({ ...submitFilter, height: true });
    } else if (type === 2) {
      setSubmitFilter({ ...submitFilter, weight: true });
    } else if (type === 3) {
      setSubmitFilter({ ...submitFilter, experience: true });
    } else if (type === 4) {
      setSubmitFilter({ ...submitFilter, move: true });
    } else if (type === 5) {
      setSubmitFilter({ ...submitFilter, type: true });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(clearPokemons());
    if (submitFilter.name === true) {
      dispatch(pokemonNameAsync(filters.name));
    }
    if (submitFilter.height === true) {
      dispatch(pokemonHeightAsync(filters.height));
    }
    if (submitFilter.weight === true) {
      dispatch(pokemonWeightAsync(filters.weight));
    }
    if (submitFilter.experience === true) {
      dispatch(pokemonExperienceAsync(filters.experience));
    }
    if (submitFilter.move === true) {
      dispatch(pokemonMoveAsync(filters.move));
    }
    if (submitFilter.type === true) {
      dispatch(pokemonTypeAsync(filters.type));
    }

    setTimeout(() => {
      setFilters({
        name: "",
        height: "",
        weight: "",
        experience: "",
        move: "",
        type: "",
      });
      setSubmitFilter({
        name: false,
        height: false,
        weight: false,
        experience: false,
        move: false,
        type: false,
      });
    }, 1500);
  };

  return (
    <form
      className={style.pokemons_filter_container}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className={style.input_container}>
        <input
          type="text"
          placeholder="Pokemon name"
          name="name"
          className={style.input_style}
          value={filters.name}
          onChange={(e) => handleChange(e, 0)}
        />
      </div>
      <div className={style.input_container}>
        <input
          type="text"
          placeholder="Pokemon height"
          name="height"
          className={style.input_style}
          value={filters.height}
          onChange={(e) => handleChange(e, 1)}
        />
      </div>
      <div className={style.input_container}>
        <input
          type="text"
          placeholder="Pokemon weight"
          name="weight"
          className={style.input_style}
          value={filters.weight}
          onChange={(e) => handleChange(e, 2)}
        />
      </div>
      <div className={style.input_container}>
        <input
          type="text"
          placeholder="Pokemon base experience"
          name="experience"
          className={style.input_style}
          value={filters.experience}
          onChange={(e) => handleChange(e, 3)}
        />
      </div>
      <div className={style.select_container}>
        <select
          className={style.select_items}
          onChange={(e) => handleChange(e, 4)}
          name="move"
        >
          <option>Pokemon move</option>
          {moves.data?.length ? (
            moves.data.map((move, id) => {
              return (
                <option key={id} value={move.name}>
                  {move.name}
                </option>
              );
            })
          ) : (
            <option>Not moves fetched😭</option>
          )}
        </select>
      </div>
      <div className={style.select_container}>
        <select
          className={style.select_items}
          onChange={(e) => handleChange(e, 5)}
          name="type"
        >
          <option>Pokemon type</option>
          {types.data?.length ? (
            types.data.map((type, id) => {
              return (
                <option key={id} value={type.name}>
                  {type.name}
                </option>
              );
            })
          ) : (
            <option>Not types fetched😭</option>
          )}
        </select>
      </div>
      <div className={style.submit_container}>
        <input type="submit" value="Filter" className={style.submit} />
      </div>
    </form>
  );
};

export default PokemonsFilters;
