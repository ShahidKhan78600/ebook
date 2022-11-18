const express = require("express")
const dotenv = require("dotenv")
const cors = require('cors')
const cloudinary = require('cloudinary').v2
const fileUpload = require('express-fileupload');
const dbconnection = require('./config/database')
const bookRoutes = require("./routes/book")
const categoryRoutes = require("./routes/category")
var morgan = require('morgan')
const app = express()
dotenv.config()

const PORT = process.env.PORT
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './tmp/'
}));
dbconnection()
app.use(morgan('tiny'))
app.use("/api/v1",bookRoutes)
app.use("/api/v1",categoryRoutes)
app.get('/' , (req,res)=>{
     res.send("helllloo")
})



app.listen(PORT , ()=>{
    console.log(`app is up and running on port ${PORT}`)
})