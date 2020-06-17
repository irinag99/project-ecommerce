const { body } = require('express-validator');
const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('users')
const path = require('path');
const bcrypt = require('bcryptjs');

module.exports = {
   register: [
      body('name').notEmpty().withMessage('Este campo es obligatorio'),
      body('surname').notEmpty().withMessage('Este campo es obligatorio'),      
      body('email')
         .notEmpty().withMessage('Este campo es obligatorio').bail()
         .isEmail().withMessage('Debes colocar un email vaildo').bail()
         .custom((value, { req }) => {

            const user = userModel.find( e => e.email == req.body.email)

            if(user){
               return false
            }

            return true
            
         }).withMessage('Email ya registrado'),     
      
      body('password')
         .notEmpty().withMessage('Este campo es obligatorio').bail()
         .isLength({min: 8}).withMessage('La contraseña debe tener por lo menos 8 caracteres').bail()
         .custom((value, { req }) => req.body.password == req.body.passwordR).withMessage('Las passwords no coinciden'),
      body('passwordR')
         .notEmpty().withMessage('Este campo es obligatorio')
   ],
   login: [
      body('emaillogin')
         .notEmpty().withMessage('Este campo es obligatorio').bail()
         .isEmail().withMessage('Debes colocar un email vaildo').bail()
         .custom((value, { req }) => {

            const user = userModel.find(e => e.email == req.body.emaillogin)

            if(user){
               if (bcrypt.compareSync(req.body.passwordlogin, user.password)) {
                  return true
               }
            }

            return false;

         }).withMessage('La contraseña y el email no coinciden'),
   ]
}