const mongoose = require("mongoose");

const databseConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/book")
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Error while connecting to database", err);
    });
};

module.exports = databseConnection;