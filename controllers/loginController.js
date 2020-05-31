const bcrypt = require("bcryptjs")
const jsonModel = require("../models/jsonModel")
const userModel = jsonModel('users')
const { validationResult } = require('express-validator');

const controller = {
    index: function(req, res){
        res.render('login')
    },
    process: function(req,res){
        const errors = validationResult(req);

        if(errors.isEmpty()){
  
           const user = userModel.find( e => e.email == req.body.emaillogin);
     
           return res.redirect('/');
        }
  
        return res.render('login', { errors: errors.mapped(), old: req.body })
        /* const user= userModel.find(function(elemento){
            return elemento.email== req.body.emaillogin
        })
        if(user){
            if(bcrypt.compareSync(req.body.passwordlogin, user.password)){
                res.redirect("/")
            }else{
               return res.send("password incorrecta")
            }
        }else{
            return res.send("mail no encontrado")
        } */
    }
    }

module.exports = controller;