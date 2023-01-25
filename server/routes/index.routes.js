const express = require("express");

const PokemonRouter = require("./api/pokemon.routes");

const router = express.Router();

router.use("/pokemon", PokemonRouter);

module.exports = router;
