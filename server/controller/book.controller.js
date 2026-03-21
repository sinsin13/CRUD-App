const {Book} = require("../model/book.model");

const handleBookStoreController = async (req, res) => {
  try {
    const body = req.body;

    if (
      !body.BookName ||
      !body.BookTitle ||
      !body.Author ||
      !body.SellingPrice ||
      !body.PublishDate
    ) {
      return res
        .status(400)
        .json({ message: "All fields are required", Success: false });
    }

    const bookAdd = await Book.insertOne(body);
    
    return res.status(201).json({ 
        message: "Book added successfully", 
        Success: true, 
        data: bookAdd 
      });

 } catch (error) {
    console.error("Error in handleBookStoreController:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  handleBookStoreController,
};
