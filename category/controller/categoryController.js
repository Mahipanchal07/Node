const categoryModel = require('../model/categoryModel')

const createCategory = async (req, res) => {
  const data = await categoryModel.create(req.body)
  res.send(data)
}

const getAllCategory = async (req, res) => {
  const data = await categoryModel
    .find()
    .populate('subcategoryId')
    .populate('extraCategoryId')
  res.send(data)
}

const updateCategory = async (req, res) => {
  const id = req.params.id
  await categoryModel.findByIdAndUpdate(id, req.body)
  res.send('Category updated')
}

const deleteCategory = async (req, res) => {
  const id = req.params.id
  await categoryModel.findByIdAndDelete(id)
  res.send('Category deleted')
}

module.exports = {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory
}
