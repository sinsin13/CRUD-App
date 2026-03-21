const mongoose = require("mongoose");

const databaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bookstore");
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = databaseConnection;