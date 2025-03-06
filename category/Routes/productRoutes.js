const express = require('express')
const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct
} = require('../controller/productController')

const P_router = express.Router()

P_router.post('/', createProduct)
P_router.get('/', getAllProduct)
P_router.patch('/:id', updateProduct)
P_router.delete('/:id', deleteProduct)

module.exports = P_router
