import React from "react";
import { PokemonInterface } from "../features/pokemon/pokemon.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/PokemonCard.module.css";

interface PokemonCardProps {
  currentPokemon: PokemonInterface | null;
  pokemonsLength: number;
  currentPokemonID: number;
  setCurrentPokemonID: (id: number) => void;
  setDropDetails: (b: boolean) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  currentPokemon,
  pokemonsLength,
  currentPokemonID,
  setCurrentPokemonID,
  setDropDetails,
}) => {
  const prevHandler = () => {
    const prev = currentPokemonID - 1;
    if (prev < 0) return setCurrentPokemonID(pokemonsLength - 1);
    setCurrentPokemonID(prev);
  };

  const nextHandler = () => {
    const next = currentPokemonID + 1;
    if (next >= pokemonsLength) return setCurrentPokemonID(0);
    setCurrentPokemonID(next);
  };

  if (!currentPokemon) {
    return (
      <div className={style.no_pokemon_card_container}>
        <div className={style.no_pokemons_length_container}>
          <FontAwesomeIcon icon={faCaretLeft} className={style.prev_pokemon} />
          <p className={style.no_pokemons_length}>
            {currentPokemonID + 1} / {pokemonsLength}
          </p>
          <FontAwesomeIcon icon={faCaretRight} className={style.next_pokemon} />
        </div>
        <img
          className={style.no_pokemon_image}
          onClick={() => setDropDetails(true)}
        />
        <span className={style.no_pokemon_name}>Fetching...</span>
      </div>
    );
  } else
    return (
      <div className={style.pokemon_card_container}>
        <div className={style.pokemons_length_container}>
          <FontAwesomeIcon
            icon={faCaretLeft}
            className={style.prev_pokemon}
            onClick={() => prevHandler()}
          />
          <p className={style.pokemons_length}>
            {currentPokemonID + 1} / {pokemonsLength}
          </p>
          <FontAwesomeIcon
            icon={faCaretRight}
            className={style.next_pokemon}
            onClick={() => nextHandler()}
          />
        </div>
        <img
          src={currentPokemon.sprites.other.dream_world.front_default}
          alt={`${currentPokemon.name} image`}
          className={style.pokemon_image}
          onClick={() => setDropDetails(true)}
        />
        <span className={style.pokemon_name}>{currentPokemon.name}</span>
      </div>
    );
};

export default PokemonCard;
