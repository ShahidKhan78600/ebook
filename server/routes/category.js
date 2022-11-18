const router = require("express").Router()
const {createCategory,getCategory} = require("../controllers/Category")
router.post("/savecategory",createCategory)
router.get("/getcategory",getCategory)

module.exports = router