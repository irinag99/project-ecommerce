const bcrypt = require("bcryptjs")
const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Usuario = db.Usuario;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
//const jsonModel = require("../models/jsonModel")
//const userModel = jsonModel('users')
const { validationResult } = require('express-validator');

const registerController = {
    index: function(req, res){
        return  res.render('login')
    },
    process: function(req,res) {
        
      const errors = validationResult(req);
      
      //return res.send(errors)

      if(errors.isEmpty()){
        
         let usuario = req.body;
         delete usuario.passwordR
         usuario.password = bcrypt.hashSync(usuario.password, 10);
         usuario.rol = 0;

         //return res.send(usuario);

         Usuario.create(usuario)
            .then(function(){
                res.redirect('/');
            })  
        }
        return res.render('login', { errors: errors.mapped(), old: req.body})
    }
}
module.exports = registerController