require("dotenv").config({ path: "../.env" });

const axios = require("axios");

const Pokemon = require("../models/Pokemon.model");

const {
  fetchToModel,
  getByName,
  getByHeight,
  getByWeight,
  getByBaseExperience,
  getByType,
  getByMove,
  sortPokemons,
} = require("../lib/pokemon.helper");

const getPokemonDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const pokemon = await Pokemon.findOne({ api_id: id });

    if (!pokemon?.name) {
      const fetchPokemon = await axios.get(
        `${process.env.API_URL}/pokemon/${id}`
      );

      const savedPokemon = await Pokemon.create(
        await fetchToModel(fetchPokemon.data)
      );

      return res.status(200).json({ data: savedPokemon });
    }

    return res.status(200).json({ data: pokemon });
  } catch (err) {
    return res.status(400).json({ error: err.message, status: err.status });
  }
};

const getPokemons = async (req, res) => {
  try {
    const { name } = req.query;
    const { height } = req.query;
    const { weight } = req.query;
    const { type } = req.query;
    const { base_experience } = req.query;
    const { move } = req.query;
    const { sort } = req.query;

    let pokemons = await Pokemon.find();

    if (!pokemons.length) {
      pokemons = await Pokemon.create(await fetchToModel([1, 1]));
    }

    if (name) pokemons = getByName({ pokemons, name });
    if (height) pokemons = getByHeight({ pokemons, height });
    if (weight) pokemons = getByWeight({ pokemons, weight });
    if (type) pokemons = getByType({ pokemons, type });
    if (base_experience)
      pokemons = getByBaseExperience({ pokemons, base_experience });
    if (move) pokemons = getByMove({ pokemons, move });
    if (sort) pokemons = sortPokemons({ pokemons, sort });

    return res.status(200).json({ data: pokemons });
  } catch (err) {
    return res.status(400).json({ error: err.message, status: err.status });
  }
};

module.exports = { getPokemonDetails, getPokemons };
