const Book = require("../models/Book");
const cloudienary = require("cloudinary").v2;
const { v4: uuidv4 } = require("uuid");
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

exports.saveBook = async (req, res) => {
  const {
    name,
    author,
    price,
    sale_price,
    short_description,
    description,
    category,
    composer,
  } = req.body;

  let imgeobj = {};
  try {
    if (!req.files) {
      return res.status(400).json({ error: "Please Upload a file" });
    }
    const file = req.files.photo;
    if (req.files) {
      const result = await cloudienary.uploader.upload(file.tempFilePath, {
        folder: "bookCoverphoto",
        width: 150,
        height: 150,
        crop: "fill",
      });
      imgeobj.id = result.public_id;
      imgeobj.secure_url = result.secure_url;
    }
    const coverphoto = imgeobj;
    let isbn = uuidv4();
    const book = new Book({
      name,
      author,
      price,
      sale_price,
      short_description,
      description,
      coverphoto,
      isbn,
      category,
      composer,
    });

    let result = await book.save();

    res.status(200).json({
      message: "book added",
      data: result,
    });
  } catch (err) {
    console.log("error in saveing book",err)
    res.status(400).json({
        error: `Error in book added ${err}`
      });
  }
};

exports.getBooks = async (req, res) => {
  const books = await Book.find({});
  return res.status(200).json({
    message: "ok",
    data: books,
  });
};
