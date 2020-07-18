const express = require('express');
const router = express.Router();
const apiController = require('../../controllers/apiController/apiController');

router.get('/products', apiController.products);
router.get('/users',apiController.users)
router.get('/categories',apiController.categories)
router.get('/lastproduct',apiController.lastProduct)
router.get('/latestsales',apiController.latestSales)





module.exports = router;
