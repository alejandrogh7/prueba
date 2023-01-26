import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  clearPokemon,
  pokemonAsync,
  selectPokemon,
} from "../features/pokemon/pokemonSlice";
import { PokemonInterface } from "../features/pokemon/pokemon.interface";
import style from "../styles/PokemonDetails.module.css";
import { useSelector } from "react-redux";

const PokemonDetails = () => {
  const dispatch = useAppDispatch();
  const pokemon = useSelector(selectPokemon);

  return <section className={style.pokemon_det_container}>a</section>;
};

export default PokemonDetails;
