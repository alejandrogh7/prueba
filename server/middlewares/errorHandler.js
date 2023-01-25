const errorHandler = (err, req, res, next) => {
  console.log("ERROR", err.stack);
  res.status(500).send({ error: err.message });
};

module.exports = errorHandler;
