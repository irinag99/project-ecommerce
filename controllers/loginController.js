//const jsonModel = require("../models/jsonModel")
//const userModel = jsonModel('users')
const bcrypt = require("bcryptjs")
const { validationResult } = require('express-validator');
const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Usuario = db.Usuario;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controller = {
    index: function(req, res){
        res.render('login')
    },
    process: function(req,res){
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
                    if(req.body.remember){
                        res.cookie('usuario', u.email, {maxAge: 1000*60*60});
                    }
                    return res.redirect('/');
                })
        }else{
            return res.render('login', { errors: errors.mapped(), oldS: req.body })
        }
  
        
        
    }
    }

module.exports = controller;