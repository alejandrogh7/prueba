const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pokemonSchema = new Schema(
  {
    abilities: {
      type: [
        {
          ability: {
            name: "String",
          },
        },
      ],
    },
    base_experience: {
      type: "Number",
    },
    game_indices: {
      type: [
        {
          game_index: "Number",
          version: {
            name: "String",
          },
        },
      ],
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
    order: {
      type: "Number",
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
    stats: {
      type: [
        {
          base_stat: "Number",
          effort: "Number",
          stat: {
            name: "String",
          },
        },
      ],
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
