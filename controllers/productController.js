const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Product = db.Product;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {
    validationResult
} = require("express-validator");





const productController = {
    vista: (req, res) => {
        Product.findByPk(req.params.id)
            .then(function (product) {

                return res.render("productView", {
                    product
                });
            });

    },
    create: (req, res) => {
        db.Category.findAll()
            .then((categories) => {
                return res.render('addProduct', {
                    categories
                });
            })


    },
    processCreate: (req, res) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let product = {
                name: req.body.name,
                description: req.body.description,
                price:req.body.price,
                idCategory: req.body.idCategory,
                image: req.file.filename
            }
            Product.create(product)
                .then(p => {


                    return res.send("Producto creado");

                })

        } else {
            db.Category.findAll()
                .then((categories) => {
                    return res.render('addProduct', {
                        categories:categories,errors:errors.mapped(),oldS: req.body
                     })
                     });
        }},
        search : function(req,res){
            Product.findAll({
               where:{
                  name: {[db.Sequelize.Op.like]:req.body.search+"%"} 
               } 
                
           })
           .then(function(buscado){
               return res.render('productSearch',{buscado})
           })
            },







    }



module.exports = productController;