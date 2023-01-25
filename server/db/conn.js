require("dotenv").config({ path: ".env" });

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", false);
    
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`DB connected to ${db.connection.name}`);
  } catch (err) {
    console.log / err;
  }
};

module.exports = connectDB;
