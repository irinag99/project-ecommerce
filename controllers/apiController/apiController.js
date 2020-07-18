const db = require('../../database/models/index.js')
const sequelize = db.sequelize;
const Product = db.Product;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {
    validationResult, body
} = require("express-validator");


const controlller = {
    products: function(req, res){
        Product.findAll({
            include: [
                {association: 'category'}
            ]
        })
        .then(function(products){
            let resultado = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: '/api/products'
                },
                data: products
            };
           return res.json(resultado)
        })
    },
    users: function(req, res){
        db.User.findAll()
        .then(function(users){
            let resultado = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: '/api/users'
                },
                data: users
            };
           return res.json(resultado)
        })
    },
    categories:function(req, res){
        db.Category.findAll()
        .then(function(cat){
            let resultado = {
                meta: {
                    status: 200,
                    total: cat.length,
                    url: '/api/categories'
                },
                data: cat
            };
           return res.json(resultado)
        })
    },
    lastProduct:function(req, res){
        db.Product.findAll({
            order: [
                ['id', 'DESC']
            ],
            limit:1
        })
        .then(function(lastProduct){
            let resultado = {
                meta: {
                    status: 200,
                    total: "lastProduct",
                    url: '/api/lastProduct'
                },
                data:lastProduct
            };
           return res.json(resultado)
        })
    },
    latestSales:function(req, res){
        db.Order.findAll({
            include: [
                {association: 'cart'}
            ],
            order: [
                ['id', 'DESC']
            ],
            limit:3
        })
        .then(function(sales){
            let resultado = {
                meta: {
                    status: 200,
                    total: sales.length,
                    url: '/api/latestsales'
                },
                data:sales
            };
           return res.json(resultado)
        })
    },
    login: function(req, res){
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return res.send(req.body.email + ' hola');
        } else {
            return res.send('no podés entrar');
        }
    }

}



module.exports = controlller;