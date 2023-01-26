import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  clearPokemon,
  pokemonAsync,
  selectPokemon,
} from "../features/pokemon/pokemonSlice";
import { PokemonInterface } from "../features/pokemon/pokemon.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/PokemonDetails.module.css";

interface PokemonDetailsProps {
  currentPokemonAPIID: number | null;
  setDropDetails: (b: boolean) => void;
  setCurrentPokemonAPIID: (n: number | null) => void;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({
  currentPokemonAPIID,
  setDropDetails,
  setCurrentPokemonAPIID,
}) => {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selectPokemon);

  useEffect(() => {
    if (currentPokemonAPIID) {
      dispatch(pokemonAsync(currentPokemonAPIID));
    }
  }, []);

  useEffect(() => {
    if (currentPokemonAPIID) {
      dispatch(pokemonAsync(currentPokemonAPIID));
    }
  }, [currentPokemonAPIID]);

  useEffect(() => {
    return () => {
      dispatch(clearPokemon());
    };
  }, []);

  if (!pokemon.data) {
    return (
      <div className={style.pokemon_det_main_container}>
        <section className={style.pokemon_det_container}>
          <div className={style.go_home_cont}>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setDropDetails(false)}
              className={style.go_home}
            />
          </div>
          <div className={style.pokemon_det}>
            <img className={style.no_pokemon_image} />
            <span className={style.no_pokemon_name}></span>
            <div className={style.pokemon_main_det}>
              <div className={style.no_pokemon_det_item}>
                <span></span>
              </div>
              <div className={style.no_pokemon_det_item}>
                <span></span>
              </div>
              <div className={style.no_pokemon_det_item}>
                <span></span>
              </div>
            </div>
          </div>
          <div className={style.no_pokemon_complex_det}>
            <span className={style.no_pokemon_complex_title}></span>
          </div>
          <div className={style.no_pokemon_complex_det}>
            <span className={style.no_pokemon_complex_title}></span>
          </div>
        </section>
      </div>
    );
  } else
    return (
      <div className={style.pokemon_det_main_container}>
        <section className={style.pokemon_det_container}>
          <div className={style.go_home_cont}>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setDropDetails(false)}
              className={style.go_home}
            />
          </div>
          <div className={style.pokemon_det}>
            <img
              src={pokemon.data.sprites.other.dream_world.front_default}
              alt={`${pokemon.data.name} image`}
              className={style.pokemon_image}
            />
            <span className={style.pokemon_name}>{pokemon.data.name}</span>
            <div className={style.pokemon_main_det}>
              <div className={style.pokemon_det_item}>
                <span>Height</span>
                <p>{pokemon.data.height}</p>
              </div>
              <div className={style.pokemon_det_item}>
                <span>Weight</span>
                <p>{pokemon.data.weight}</p>
              </div>
              <div className={style.pokemon_det_item}>
                <span>Experience</span>
                <p>{pokemon.data.base_experience}</p>
              </div>
            </div>
          </div>
          <div className={style.pokemon_complex_det}>
            <span className={style.pokemon_complex_title}>Types</span>
            <div className={style.pokemon_complex_items}>
              {pokemon.data.types.map((type, id) => {
                return (
                  <p key={id} className={style.type}>
                    {type.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div className={style.pokemon_complex_det}>
            <span className={style.pokemon_complex_title}>Moves</span>
            <div className={style.pokemon_complex_items}>
              {pokemon.data.moves.map((move, id) => {
                return (
                  <p key={id} className={style.move}>
                    {move.move.name}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
};

export default PokemonDetails;
