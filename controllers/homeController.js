const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Category = db.Category;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



const homeController = { 
    "vista": (req,res)=>{
        Category.findAll()
        .then(function(categories){
            return res.render("home", {categories})
        })
    }
}


module.exports = homeController;
