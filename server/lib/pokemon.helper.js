require("dotenv").config({ path: "../.env" });

const axios = require("axios");

const fetchToModel = async (pokemons) => {
  if (typeof pokemons.length === "number") {
    let pokemonsRaw = [];
    for (let i = 1; i <= 50; i++) {
      const info = await axios.get(`${process.env.API_URL}/pokemon/${i}`);
      pokemonsRaw.push(info.data);
    }
    const pokemonsModel = await pokemonsRaw.map((pokemon) => {
      console.log / pokemon;
      return {
        abilities: pokemon.abilities.map((ab) => {
          return {
            ability: {
              name: ab.ability.name,
            },
          };
        }),
        base_experience: pokemon.base_experience,
        game_indices: pokemon.game_indices.map((game) => {
          return {
            game_index: game.game_index,
            version: {
              name: game.version.name,
            },
          };
        }),
        height: pokemon.height,
        api_id: pokemon.id,
        moves: pokemon.moves.map((move) => {
          return {
            move: {
              name: move.move.name,
            },
            version_group_details: move.version_group_details.map((vers) => {
              return {
                level_learned_at: vers.level_learned_at,
                move_learn_method: {
                  name: vers.move_learn_method.name,
                },
              };
            }),
          };
        }),
        name: pokemon.name,
        order: pokemon.order,
        sprites: {
          other: {
            dream_world: {
              front_default: pokemon.sprites.other.dream_world.front_default,
            },
          },
        },
        stats: pokemon.stats.map((stat) => {
          return {
            base_stat: stat.base_stat,
            effort: stat.effort,
            stat: {
              name: stat.stat.name,
            },
          };
        }),
        types: pokemon.types.map((tp) => {
          return {
            name: tp.type.name,
          };
        }),
        weight: pokemon.weight,
      };
    });

    return pokemonsModel;
  } else {
    return {
      abilities: pokemons.abilities.map((ab) => {
        return {
          ability: {
            name: ab.ability.name,
          },
        };
      }),
      base_experience: pokemons.base_experience,
      game_indices: pokemons.game_indices.map((game) => {
        return {
          game_index: game.game_index,
          version: {
            name: game.version.name,
          },
        };
      }),
      height: pokemons.height,
      api_id: pokemons.id,
      moves: pokemons.moves.map((move) => {
        return {
          move: {
            name: move.move.name,
          },
          version_group_details: move.version_group_details.map((vers) => {
            return {
              level_learned_at: vers.level_learned_at,
              move_learn_method: {
                name: vers.move_learn_method.name,
              },
            };
          }),
        };
      }),
      name: pokemons.name,
      order: pokemons.order,
      sprites: {
        other: {
          dream_world: {
            front_default: pokemons.sprites.other.dream_world.front_default,
          },
        },
      },
      stats: pokemons.stats.map((stat) => {
        return {
          base_stat: stat.base_stat,
          effort: stat.effort,
          stat: {
            name: stat.stat.name,
          },
        };
      }),
      types: pokemons.types.map((type) => {
        return {
          type: type.type.name,
        };
      }),
      weight: pokemons.weight,
    };
  }
};

const getByName = ({ pokemons, name }) => {
  return pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(name.toLowerCase())
  );
};

const getByHeight = ({ pokemons, height }) => {
  return pokemons.filter((pokemon) => pokemon.height === +height);
};

const getByWeight = ({ pokemons, weight }) => {
  return pokemons.filter((pokemon) => pokemon.weight === +weight);
};

const getByBaseExperience = ({ pokemons, base_experience }) => {
  return pokemons.filter(
    (pokemon) => pokemon.base_experience === +base_experience
  );
};

const getByType = ({ pokemons, type }) => {
  return pokemons.filter((pokemon) =>
    pokemon.types.find((tp) => tp.name === type)
  );
};

const getByMove = ({ pokemons, move }) => {
  pokemons.filter((pokemon) =>
    pokemon.moves.find((mv) => {
      console.log(mv);
    })
  );
  return pokemons.filter((pokemon) =>
    pokemon.moves.find((mv) =>
      mv.move.name.toLowerCase().includes(move.toLowerCase())
    )
  );
};

const sortPokemons = ({ pokemons, sort }) => {
  if (sort.toUpperCase() === "AZ") {
    pokemons = pokemons.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }
  if (sort.toUpperCase() === "ZA") {
    pokemons = pokemons.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }
  if (sort.toUpperCase() === "LOWHEIGHT") {
    pokemons = pokemons.sort((a, b) => {
      if (a.height > b.height) return 1;
      if (a.height < b.height) return -1;
      return 0;
    });
  }
  if (sort.toUpperCase() === "HEIGHTLOW") {
    pokemons = pokemons.sort((a, b) => {
      if (a.height < b.height) return 1;
      if (a.height > b.height) return -1;
      return 0;
    });
  }
  if (sort.toUpperCase() === "LOWWEIGHT") {
    pokemons = pokemons.sort((a, b) => {
      if (a.weight > b.weight) return 1;
      if (a.weight < b.weight) return -1;
      return 0;
    });
  }
  if (sort.toUpperCase() === "WEIGHTLOW") {
    pokemons = pokemons.sort((a, b) => {
      if (a.weight < b.weight) return 1;
      if (a.weight > b.weight) return -1;
      return 0;
    });
  }

  if (sort.toUpperCase() === "LOWEXPERIENCE") {
    pokemons = pokemons.sort((a, b) => {
      if (a.base_experience > b.base_experience) return 1;
      if (a.base_experience < b.base_experience) return -1;
      return 0;
    });
  }
  if (sort.toUpperCase() === "EXPERIENCELOW") {
    pokemons = pokemons.sort((a, b) => {
      if (a.base_experience < b.base_experience) return 1;
      if (a.base_experience > b.base_experience) return -1;
      return 0;
    });
  }
  return pokemons;
};

module.exports = {
  fetchToModel,
  getByName,
  getByHeight,
  getByWeight,
  getByBaseExperience,
  getByType,
  getByMove,
  sortPokemons,
};
