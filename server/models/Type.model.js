const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const typeSchema = new Schema(
  {
    name: "String",
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Type", typeSchema);
