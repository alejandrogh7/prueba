const express = require("express");

const { getMoves } = require("../../controllers/move.controller");

const router = express.Router();

router.get("/", getMoves);

module.exports = router;
