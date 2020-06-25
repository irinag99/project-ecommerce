const bcrypt = require("bcryptjs")
const { validationResult } = require('express-validator');
const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Usuario = db.Usuario;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const userController = {
    login: function(req, res){
        res.render('user/login')
    },
    processLogin: function(req,res){
        const errors = validationResult(req);
        if(errors.isEmpty()){
            
            Usuario.findOne({
                where: {
                    email: req.body.emaillogin
                }
            })
                .then(function(usuario){
                    let u = usuario;
                    delete u.password;
                    req.session.user = u;
                    if(req.body.remember != undefined ){
                        res.cookie('user', u.email, {maxAge: 1000*60*60});
                    }
                    return res.redirect('/');
                })
        }else{
            return res.render('user/login', { errors: errors.mapped(), oldS: req.body })
        }
  
    },

    processRegister: function(req,res) {
        
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
        }else{
           return res.render('user/login', { errors: errors.mapped(), old: req.body}) 
        }
        
    },
    profile: function(req, res){
        return res.render('user/profile');
    },
    processProfile: (req,res)=>{
        let update = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            description: req.body.description,
            avatar: req.files[0].filename
        }
         Usuario.update(update, {
            where:{
                email: req.body.email
            }
        })
        .then(function(resultado){
            return Usuario.findOne({
                where:{
                    email: req.body.email
                }
            })
            
        })
        .then((e)=>{
            req.session.user = e
            return res.redirect("/user/profile")
        })
    }

}


module.exports = userController;