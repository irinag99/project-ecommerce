const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Category = db.Category;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



const categoryController = {
    "vista": (req, res) => {

        let page = req.query.page || 1;
        page = parseInt(page);

        let order = req.query.order || 'max';


        let category = Category.findByPk(req.params.id, {
            include: [
                {
                    association: 'products',
                    limit: 5,
                    offset: 5*(page - 1),
                    order: order == 'max' ? [
                        ['price', 'DESC']
                    ] : [
                        ['price', 'ASC']
                    ]
                }
            ],
        });
        let nextPage = Category.findByPk(req.params.id, {
            include: [
                {
                    association: 'products',
                    limit: 5,
                    offset: 5*(page),
                    order: order == 'max' ? [
                        ['price', 'DESC']
                    ] : [
                        ['price', 'ASC']
                    ]
                }
            ],
        });

        let categorys = Category.findAll({
            order: [
                ['name', 'ASC']
            ]
        });
console.log(page);
    

        Promise.all([category, categorys,nextPage])
            .then(function ([category, categorys,nextPage]) {
                console.log(nextPage.products)
                return res.render("categoria", { category: category, categorys: categorys, page : page, nextPage: nextPage})
            })



    },


}


module.exports = categoryController;
