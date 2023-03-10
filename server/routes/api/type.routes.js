const express = require("express");

const { getTypes } = require("../../controllers/type.controller");

const router = express.Router();

router.get("/", getTypes);

module.exports = router;
