const mongoose = require('mongoose')

const subcategorySchema = new mongoose.Schema({
  name: {
    type: String
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'
  }
})

const subcategoryModel = mongoose.model('subcategory', subcategorySchema)

module.exports = subcategoryModel
