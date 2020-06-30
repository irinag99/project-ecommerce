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

        // return res.send(req.body)
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            Product.create(req.body)
                .then((producto) => {


                    return res.send("Producto creado");

                })

        } else {
            db.Category.findAll()
                .then((categories) => {
                    return res.render('addProduct', {
                        categories:categories,errors:errors.mapped(),oldS: req.body
                     })
                     });
        }}







    }



module.exports = productController;