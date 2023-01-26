require("dotenv").config({ path: ".env" });

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
//OPTIONS ~ MIDDLEWARES
const notFoundRoute = require("./middlewares/NotFound");
const errorHandler = require("./middlewares/errorHandler");
//ROUTES ~~ DB
const routes = require("./routes/index.routes");
const connectDB = require("./db/conn");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", routes);

app.all("*", notFoundRoute);

app.use(errorHandler);

//CONNECT ~ DB ~~ SERVER
connectDB();

mongoose.connection.once("open", () => {
  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
