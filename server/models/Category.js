const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name :{type:String , require:true, unique: true},
    photo:{
        id:String,
        secure_url: String
    }
},
{timestamps: { createdAt: 'created_at' } })

const Category = mongoose.model('Category',categorySchema)

module.exports = Category;