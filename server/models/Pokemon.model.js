const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pokemonSchema = new Schema(
  {
    base_experience: {
      type: "Number",
    },
    height: {
      type: "Number",
    },
    api_id: {
      type: "Number",
    },
    moves: {
      type: [
        {
          move: {
            name: "String",
          },
          version_group_details: {
            level_learned_at: "Number",
          },
          move_learn_method: {
            name: "String",
          },
        },
      ],
    },
    name: {
      type: "String",
    },
    sprites: {
      other: {
        dream_world: {
          front_default: {
            type: "String",
          },
        },
      },
    },
    types: {
      type: [
        {
          name: "String",
        },
      ],
    },
    weight: {
      type: "Number",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Pokemon", pokemonSchema);
