const express = require('express');
const router = express.Router();
const { handleBookStoreController } = require('../controller/book.controller');

// http://localhost:8000/book/addbook
router.post("/addbook", handleBookStoreController);

module.exports = router;