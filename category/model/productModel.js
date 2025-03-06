const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: {
    type: String
  },
  price: {
    type: String
  },
  quantity: {
    type: String
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'
  },
  subcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subcategory'
  },
  extraCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'extraCategory'
  }
})

const productModel = mongoose.model('product', productSchema)

module.exports = productModel
