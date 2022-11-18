const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    name :{type:String , require:true},
    author :{type:String , require:true},
    price:{type:Number , require:true},
    sale_price:{type:Number },
    short_description :{type:String , require:true},
    description :{type:String},
    coverphoto: {
        id:String,
        secure_url: String
    },
    isbn :{type:String},
    category:{ type: mongoose.Schema.ObjectId, ref: 'Category' },
    composer:{type:String}
},
{timestamps: { createdAt: 'created_at' } })

const Book = mongoose.model('Book',bookSchema)

module.exports = Book;