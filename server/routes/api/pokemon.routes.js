const express = require("express");

const { getPokemonDetails } = require("../../controllers/pokemon.controller");

const router = express.Router();

router.get("/:id", getPokemonDetails);

module.exports = router;
