const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moveSchema = new Schema(
  {
    name: "String",
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Move", moveSchema);
