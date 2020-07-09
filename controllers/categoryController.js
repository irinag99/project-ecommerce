const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Category = db.Category;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



const categoryController = { 
    "vista": (req,res)=>{

        let category = Category.findByPk(req.params.id,{
            include: [ 
                {association: 'products',
                 limit: 14}
            ],
            });
                
        let categorys = Category.findAll({
            order:[
                ['name','ASC']
                ]
        });
        
        Promise.all([category, categorys])
         .then(function ([category, categorys]){
             return res.render("categoria", {category:category, categorys:categorys})
             })
        


    },
    "vistaMax": (req,res)=>{

        let category = Category.findByPk(req.params.id,{
            include: [ 
                {association: 'products',
                 limit: 14,
                order:[
                    ['price','DESC']
                ]}
            ],
            });
                
        let categorys = Category.findAll({
            order:[
                ['name','ASC']
                ]
        });
        
        Promise.all([category, categorys])
         .then(function ([category, categorys]){
             return res.render("categoria", {category:category, categorys:categorys})
             })
        


    },
    "vistaMin": (req,res)=>{

        let category = Category.findByPk(req.params.id,{
            include: [ 
                {association: 'products',
                 limit: 10,
                order:[
                    ['price','ASC']
                ]}
            ],
            });
                
        let categorys = Category.findAll({
            order:[
                ['name','ASC']
                ]
        });
        
        Promise.all([category, categorys])
         .then(function ([category, categorys]){
             return res.render("categoria", {category:category, categorys:categorys})
             })
        


    }

}


module.exports = categoryController;