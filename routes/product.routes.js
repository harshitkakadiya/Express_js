const express = require('express');

const productRoutes = express.Router();

const {
    addProduct,
    // replaceProduct,
    updateProduct,
    deleteProduct,
    getProduct ,
    getSingleProduct
} = require('../controller/product.controller');

productRoutes.post('/', addProduct);

// productRoutes.put('/:id', replaceProduct);

productRoutes.patch('/', updateProduct);

productRoutes.delete('/', deleteProduct);

productRoutes.get('/', getProduct);

productRoutes.get('/get-product', getSingleProduct);

module.exports = productRoutes;