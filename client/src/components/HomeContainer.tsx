import Pokemons from "../containers/Pokemons";
import style from "../styles/HomeContainer.module.css";
import FilterSort from "./FilterSort";

const HomeContainer = () => {
  return (
    <section className={style.home_container}>
      <Pokemons />
      <FilterSort />
    </section>
  );
};

export default HomeContainer;
