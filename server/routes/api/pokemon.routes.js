const express = require("express");

const {
  getPokemonDetails,
  getPokemons,
} = require("../../controllers/pokemon.controller");

const router = express.Router();

router.get("/:id", getPokemonDetails);

router.get("/", getPokemons);

module.exports = router;
