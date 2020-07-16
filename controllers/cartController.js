const db = require('../database/models')
const Sequelize = require('sequelize');
const {
    promiseImpl
} = require('ejs');
const Op = Sequelize.Op;

const controller = {
    index: (req, res) => {
        db.Cart.findAll({
                where: {
                    [Op.and]: [{
                            idUser: req.session.user.id
                        },
                        {
                            state: 0
                        }
                    ]
                },
                include: [{
                    association: 'product',
                }],
            })
            .then(products => {
                // console.log(products[0].product)
                return res.render("cart", {
                    cartProducts: products
                })
            })

    },
    deleteProduct: (req, res) => {
        db.Cart.destroy({
                where: {
                    id: req.body.cartProductId
                }
            })
            .then(products => {
                return res.redirect('/cart')
            })
    },
    toBuy: (req, res) => {
        db.Cart.findAll({
                where: {
                    state: 0,
                    idUser: req.session.user.id
                }
            })
            .then((findCart) => {
                let totalComprado = 200
                findCart.map((product) => {
                    totalComprado += product.totalPrice
                })
                return db.Order.create({
                    total: totalComprado,
                    idUser: req.session.user.id
                })

            })

            .then((order) => {
                let updateCart = db.Cart.update({
                    state: 1,
                    idOrder: order.id
                }, {
                    where: {
                        state: 0,
                        idUser: req.session.user.id
                    }
                })
            })
            .then(() => {
                return res.redirect("/");
            })
    }


}



module.exports = controller;