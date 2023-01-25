require("dotenv").config({ path: "../.env" });

const axios = require("axios");

const Type = require("../models/Type.model");

const getTypes = async (req, res) => {
  try {
    const types = await Type.find();

    if (!types.length) {
      const fetchTypes = await axios.get(`${process.env.API_URL}/type`);

      const savedTypes = await Type.create(
        fetchTypes.data.results.map((types) => {
          return {
            name: types.name,
          };
        })
      );

      return res.status(200).json({
        data: savedTypes,
      });
    }

    return res.status(200).json({ data: types });
  } catch (err) {
    return res.status(400).json({ error: err.message, status: err.status });
  }
};

module.exports = { getTypes };
