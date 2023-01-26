import { useState } from "react";
import PokemonDetails from "../containers/PokemonDetails";
import Pokemons from "../containers/Pokemons";
import FilterSort from "./FilterSort";
import style from "../styles/HomeContainer.module.css";

const HomeContainer = () => {
  const [dropDetails, setDropDetails] = useState(false);

  console.log(dropDetails);
  return (
    <section className={style.home_container}>
      <Pokemons setDropDetails={setDropDetails} />
      <FilterSort />
      {dropDetails ? <PokemonDetails /> : null}
    </section>
  );
};

export default HomeContainer;
