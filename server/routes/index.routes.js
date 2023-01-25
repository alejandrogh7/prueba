const express = require("express");

const PokemonRouter = require("./api/pokemon.routes");
const TypeRouter = require("./api/type.routes");
const MoveRouter = require("./api/move.routes");

const router = express.Router();

router.use("/pokemon", PokemonRouter);

router.use("/type", TypeRouter);

router.use("/move", MoveRouter);

module.exports = router;
