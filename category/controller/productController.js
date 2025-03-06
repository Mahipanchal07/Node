const productModel = require('../model/productModel')

const createProduct = async (req, res) => {
  const data = await productModel.create(req.body)
  res.send(data)
}
const getAllProduct = async (req, res) => {
  const data = await productModel
    .find()
    .populate('subcategoryId')
    .populate('categoryId')
    .populate('extraCategoryId')
  res.send(data)
}
const updateProduct = async (req, res) => {
  const id = req.params.id
  await productModel.findByIdAndUpdate(id, req.body)
  res.send('Product updated')
}
const deleteProduct = async (req, res) => {
  const id = req.params.id
  await productModel.findByIdAndDelete(id)
  res.send('Product deleted')
}
module.exports = { createProduct, getAllProduct, updateProduct, deleteProduct }