import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import PokemonCard from "../components/PokemonCard";
import {
  clearPokemons,
  pokemonsAsync,
  selectPokemons,
} from "../features/pokemon/pokemonSlice";
import { PokemonInterface } from "../features/pokemon/pokemon.interface";
import style from "../styles/Pokemons.module.css";

const Pokemons = () => {
  const pokemons = useAppSelector(selectPokemons);
  const dispatch = useAppDispatch();

  const pokemonsLength: number = pokemons.data?.length ?? 0;
  const [currentPokemonID, setCurrentPokemonID] = useState<number>(0);
  const [currentPokemon, setCurrentPokemon] = useState<PokemonInterface | null>(
    null
  );

  useEffect(() => {
    dispatch(pokemonsAsync());
    setCurrentPokemonID(0);
  }, []);

  useEffect(() => {
    if (pokemons.data?.length) {
      setCurrentPokemon(pokemons.data[currentPokemonID]);
    } else if (!pokemons.data) {
      setCurrentPokemon(null);
      setCurrentPokemonID(0);
    }
  }, [pokemons.data]);

  useEffect(() => {
    setCurrentPokemon(null);
    setTimeout(() => {
      if (pokemons.data?.length) {
        setCurrentPokemon(pokemons.data[currentPokemonID]);
      } else if (!pokemons.data) {
        setCurrentPokemon(null);
        setCurrentPokemonID(0);
      }
    }, 1000);
  }, [currentPokemonID]);

  return (
    <section className={style.pokemons_container}>
      <PokemonCard
        currentPokemon={currentPokemon}
        pokemonsLength={pokemonsLength}
        currentPokemonID={currentPokemonID}
        setCurrentPokemonID={setCurrentPokemonID}
      />
    </section>
  );
};

export default Pokemons;
