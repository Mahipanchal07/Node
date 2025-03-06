const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  title: {
    type: String
  },
  price: {
    type: String
  },
  quantity: {
    type: String
  },
  subcategoryId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'subcategory'
    }
  ],
  extraCategoryId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'extraCategory'
    }
  ]
})

const categoryModel = mongoose.model('category', categorySchema)

module.exports = categoryModel
