const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Product = db.Product;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const productController = { 
    vista: (req,res)=>{
        Product.findByPk(req.params.id)
        .then(function(product){
            return res.render("productView", {product});
        });
        
    },
    create: (req, res) => {
        return res.render('addProduct');
    },
    processCreate: (req, res) => {

    }
}


module.exports = productController;