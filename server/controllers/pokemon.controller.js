require("dotenv").config({ path: ".env" });

const axios = require("axios");

const Pokemon = require("../models/Pokemon.model");

const getPokemonDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findOne({ apiId: id });

    if (!pokemon?.name) {
      const fetchPokemon = await axios.get(
        `${process.env.API_URL}/pokemon/${id}`
      );

      const savedPokemon = await Pokemon.create({
        name: fetchPokemon.data.name,
        apiId: fetchPokemon.data.id,
        height: fetchPokemon.data.height,
        weight: fetchPokemon.data.weight,
      });

      return res.status(200).json({ data: savedPokemon });
    }

    return res.status(200).json({ data: pokemon });
  } catch (err) {
    return res.status(400).json({ error: err.message, status: err.status });
  }
};

module.exports = { getPokemonDetails };
