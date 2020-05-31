const { body } = require('express-validator');
const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('users')
const path = require('path');
const bcrypt = require('bcryptjs');

module.exports = {
   register: [
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
         //password
         body('password')
            .notEmpty().withMessage('campo obligatorio').bail()
            .isLength({min: 8}).withMessage('debe tener por lo menos 8 caracteres').bail()
            .custom((value, { req }) => req.body.password == req.body.passwordR).withMessage('las passwords no coinciden'),
         body('passwordR')
            .notEmpty().withMessage('campo obligatorio')
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

         }).withMessage('La password y el email no coinciden'),
   ]
}