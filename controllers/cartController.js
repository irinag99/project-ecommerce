const db = require('../database/models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controller = { 
    index: (req,res)=>{
        db.Cart.findAll({
            where:{
                [Op.and]:[
                    {
                        idUser: req.session.user.id
                    },
                    {
                        state: 0
                    }
                ]
            },
            include: [
                {
                    association: 'product',
                }
            ],
        })
        .then(products=>{
            // console.log(products[0].product)
            return res.render("cart", {cartProducts: products})
        }) 
        
    },
    deleteProduct: (req, res) => {
        db.Cart.destroy({
            where: {
                id: req.body.cartProductId
            }
        })
        .then(products =>{
            return res.redirect('/cart')
        })
    }
}


module.exports = controller;