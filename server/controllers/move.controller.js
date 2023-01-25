require("dotenv").config({ path: "../.env" });

const axios = require("axios");

const Move = require("../models/Move.model");

const getMoves = async (req, res) => {
  try {
    const moves = await Move.find();

    if (!moves.length) {
      const fetchMoves = await axios.get(
        `${process.env.API_URL}/move/?offset=20&limit=50`
      );

      const savedMoves = await Move.create(
        fetchMoves.data.results.map((moves) => {
          return {
            name: moves.name,
          };
        })
      );

      return res.status(200).json({
        data: savedMoves,
      });
    }

    return res.status(200).json({ data: moves });
  } catch (err) {
    return res.status(400).json({ error: err.message, status: err.status });
  }
};

module.exports = { getMoves };
