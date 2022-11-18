const router = require("express").Router()
const {saveBook,getBooks} = require('../controllers/Book')
router.get('/getbooks' ,getBooks)
router.post('/addbook',saveBook)


module.exports = router