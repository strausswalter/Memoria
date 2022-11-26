const { Router } = require('express');
const router = Router();
const { listProducts } = require('../controller/product');


router.get('/products', listProducts);
// router.get('/product/:id', listProductbyId);
// router.post('/product', createProduct);
// router.delete('/product/:id', deleteProduct);
// router.put('.product/:id', editProduct);


module.exports = router;
