const { body } = require('express-validator');
const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('users')
const path = require('path');
const bcrypt = require('bcryptjs');
const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Usuario = db.Usuario;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = {
   register: [
      body('nombre').notEmpty().withMessage('Este campo es obligatorio'),
      body('apellido').notEmpty().withMessage('Este campo es obligatorio'),      
      body('email')
            .notEmpty().withMessage('este campo es obligatorio').bail()
            .isEmail().withMessage('debes colocar un email valido').bail()
            .custom(value => {
                return Usuario.findOne({
                    where:{
                        email: value
                    }
                })
                .then(function(resultado){
                    if(resultado){
                        return Promise.reject('email en uso')
                    }
                })
            }),   
      
      body('password')
         .notEmpty().withMessage('Este campo es obligatorio').bail()
         .isLength({min: 8}).withMessage('La contraseña debe tener por lo menos 8 caracteres').bail()
         .custom((value, { req }) => req.body.password == req.body.passwordR).withMessage('Las passwords no coinciden'),
      body('passwordR')
         .notEmpty().withMessage('Este campo es obligatorio')
   ],
   login: [
      body('emaillogin')
            .notEmpty().withMessage('este campo es obligatorio').bail()
            .isEmail().withMessage('debes colocar un email valido').bail()
            .custom(value => {
                return Usuario.findOne({
                    where:{
                        email : value
                    }
                })
                .then(function(resultado){
                    if(resultado){
                        return Promise.reject('el email no coincide')
                    }
                })
            }),   
            body('passwordlogin')
            .notEmpty().withMessage('este campo es obligatorio').bail()
            .isEmail().withMessage('debes colocar una contraseña valida').bail()
            .custom(value => {
                return Usuario.findOne({
                  
                  where:{
                       password: value
                    }
                })
                .then(function(resultado){
                    if(resultado){
                        return Promise.reject('la contraseña es incorrecta')
                    }
                })
            }),  

            //const user = userModel.find(e => e.email == req.body.emaillogin)

            //if(user){
              // if (bcrypt.compareSync(req.body.passwordlogin, user.password)) {
                //  return true
               //}
           // }

            //return false;

         //}).withMessage('La contraseña y el email no coinciden'),
   ]
}