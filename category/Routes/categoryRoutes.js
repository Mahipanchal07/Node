const express = require('express')
const {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory
} = require('../controller/categoryController')

const C_router = express.Router()

C_router.post('/', createCategory)
C_router.get('/', getAllCategory)
C_router.patch('/:id', updateCategory)
C_router.delete('/:id', deleteCategory)

module.exports = C_router
