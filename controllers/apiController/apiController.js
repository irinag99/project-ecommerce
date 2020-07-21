const db = require('../../database/models/index.js')
const sequelize = db.sequelize;
const Product = db.Product;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const jwt = require('jsonwebtoken')
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
           /*  console.log(req.body);
            req.session.dashboardUser = req.body.email;
            console.log(req.session.dashboardUser);
            return res.json(req.body.email); */
            const payload={
                user: {
                     email: req.body.email
                    } 
                }
                jwt.sign(
                    payload,
                    "secret",{
                        expiresIn:300000
                    },
                    (err, token)=>{
                        if(err) throw err
                        res.status(200).json({token})
                    }
                )
        } else {
            console.log('error');
            return res.json('no podés entrar');
        }
    },
    allSales:function(req, res){
        db.Order.findAll()
        .then(function(sales){
            let resultado = {
                meta: {
                    status: 200,
                    total: sales.length,
                    url: '/api/allsales'
                },
                data:sales
            };
           return res.json(resultado)
        })
    },
    session: function(req, res){
        const token = req.header("token")
        if(!token) return res.send("no hay tokennn")

        try{
            const decoded = jwt.verify(token, "secret")
            console.log(decoded)

            user=decoded.user
            res.send("entraste periito")
        }catch(e){
            res.send("token no funca bro")
        }
     /*    console.log(req.session);
        if(req.session.dashboardUser){
            return res.json({
                meta: {
                    status: 200,
                    url: '/api/session',
                    msg: 'ok'
                },
                data: {
                    user: req.session.dashboardUser,
                    role: 100
                }
            })
        }else{
            return res.json({
                meta: {
                    status: 404,
                    url: '/api/session',
                    msg: 'not found'
                }
            })
        } */
    }



}



module.exports = controlller;