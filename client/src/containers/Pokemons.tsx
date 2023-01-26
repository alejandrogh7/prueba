import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import PokemonCard from "../components/PokemonCard";
import {
  clearPokemons,
  pokemonsAsync,
  selectPokemons,
} from "../features/pokemon/pokemonSlice";
import { PokemonInterface } from "../features/pokemon/pokemon.interface";
import style from "../styles/Pokemons.module.css";

interface PokemonsProps {
  setDropDetails: (b: boolean) => void;
}

const Pokemons: React.FC<PokemonsProps> = ({ setDropDetails }) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(clearPokemons());
    setTimeout(() => {
      dispatch(pokemonsAsync());
    }, 1000);
  };

  return (
    <section className={style.pokemons_container}>
      <PokemonCard
        currentPokemon={currentPokemon}
        pokemonsLength={pokemonsLength}
        currentPokemonID={currentPokemonID}
        setCurrentPokemonID={setCurrentPokemonID}
        setDropDetails={setDropDetails}
      />
      <form
        className={style.reset_pokemons_container}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={style.submit_container}>
          <input
            type="submit"
            value="Get all pokemons"
            className={style.submit}
          />
        </div>
      </form>
    </section>
  );
};

export default Pokemons;
