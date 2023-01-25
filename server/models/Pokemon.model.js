const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pokemonShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    apiId: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Pokemon", pokemonShema);
