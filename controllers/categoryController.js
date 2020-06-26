const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Category = db.Category;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



const categoryController = { 
    "vista": (req,res)=>{

        Category.findByPk(req.params.id,{
            include: [ 
                {association: 'products',
                 limit: 9}
            ],
    

        })

        .then(function(category){
            return res.render("categoria", {category});
        })




    }
}


module.exports = categoryController;