import { useState } from "react";
import PokemonDetails from "../containers/PokemonDetails";
import Pokemons from "../containers/Pokemons";
import FilterSort from "./FilterSort";
import style from "../styles/HomeContainer.module.css";

const HomeContainer = () => {
  const [dropDetails, setDropDetails] = useState(false);
  const [currentPokemonAPIID, setCurrentPokemonAPIID] = useState<number | null>(
    null
  );

  return (
    <section className={style.home_container}>
      <Pokemons
        setDropDetails={setDropDetails}
        setCurrentPokemonAPIID={setCurrentPokemonAPIID}
      />
      <FilterSort />
      {dropDetails ? (
        <PokemonDetails
          currentPokemonAPIID={currentPokemonAPIID}
          setDropDetails={setDropDetails}
          setCurrentPokemonAPIID={setCurrentPokemonAPIID}
        />
      ) : null}
    </section>
  );
};

export default HomeContainer;
