const Category = require("../models/Category");
const cloudinary = require('cloudinary').v2



exports.createCategory = async (req, res) => {
  
  const { name } = req.body;
  let imgobj = {};
  if (!req.files) {
    return res.status(400).json({ error: "Please Upload a file" });
  }

  try {
    const file = req.files.photo;
    if (req.files) {
      const result = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "categoryImage",
        width: 150,
        height: 150,
        crop: "fill",
      });
      // {id: result.public_id,secure_url: result.secure_url}
      imgobj.id = result.public_id;
      imgobj.secure_url = result.public_id;
    }
    const category = new Category({ name: name, photo: imgobj });
    await category
      .save()
      .then((result) => res.status(200).json({ message: "ok", data: result }));
  } catch (err) {
    console.log("error in save category", err);
    return res.status(400).json({
      error: err,
    });
  }
};

// get category

exports.getCategory = async (req, res) => {
  try {
    await Category.find({}).then((result) => {
      return res.status(200).json({ message: "ok", category: result });
    });
  } catch (err) {
    console.log("error in get category", err);
    return res.status(400).json({
      error: err,
    });
  }
};
