const mongoose = require('mongoose')

const extraCategorySchema = new mongoose.Schema({
  name: {
    type: String
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'
  }
})

const extraCategoryModel = mongoose.model('extraCategory', extraCategorySchema)

module.exports = extraCategoryModel
