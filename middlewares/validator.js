const {
    body
} = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');
const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const User = db.User;
const Sequelize = require('sequelize');
const { promiseImpl } = require('ejs');
const Op = Sequelize.Op;
const Product = db.Product;



module.exports = {
    register: [
        body('name').notEmpty().withMessage('Este campo es obligatorio'),
        body('surname').notEmpty().withMessage('Este campo es obligatorio'),
        body('email')
        .notEmpty().withMessage('este campo es obligatorio').bail()
        .isEmail().withMessage('debes colocar un email valido').bail()
        .custom(value => {
            return User.findOne({
                    where: {
                        email: value
                    }
                })
                .then(function (resultado) {
                    if (resultado) {
                        return Promise.reject('email en uso')
                    }
                })
        }),

        body('password')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({
            min: 8
        }).withMessage('La contraseña debe tener por lo menos 8 caracteres').bail()
        .custom((value, {
            req
        }) => req.body.password == req.body.passwordR).withMessage('Las passwords no coinciden'),
        body('passwordR')
        .notEmpty().withMessage('Este campo es obligatorio')
    ],
    login: [
        body('emaillogin')
        .notEmpty().withMessage('este campo es obligatorio').bail()
        .isEmail().withMessage('debes colocar un email valido').bail()
        .custom((value, {
            req
        }) => {
            return User.findOne({
                    where: {
                        email: value
                    }
                })
                .then(function (resultado) {
                    if (resultado) {
                        if (!bcrypt.compareSync(req.body.passwordlogin, resultado.password)) {
                            return Promise.reject('la contraseña o el email no coinciden')
                        }
                    } else {
                        return Promise.reject('la contraseña o el email no coinciden')
                    }
                })
        }),
    ],
    createProduct: [
       

        body('name')
        .notEmpty().withMessage("Debes completar este campo").bail()
        .custom((value, {
            req
        }) => {
            return Product.findOne({
                where: {
                    name: value
                }
            }).then((resultado) => {
                if (resultado) {
                    return Promise.reject("Producto ya existente")
                }

            })
        }),

        body("description")
            .notEmpty().withMessage("Descripcion del producto obligatoria"),

        body("image")
        // .notEmpty().withMessage("Tenes que cargar la imagen de tu producto !").bail()
        .custom((value, { req }) => {

            if(req.file == undefined){
              return false
            }

            return true
            
         }).withMessage('Imagen obligatoria').bail()
        .custom((value, { req }) => {

            if(req.file != undefined){
               const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
               const ext = path.extname(req.file.originalname)
               return acceptedExtensions.includes(ext);
            }

            return true
            
         }).withMessage('La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG')

        ,

        body("price")
        .notEmpty().withMessage("Cual es el total a pagar?")
        .isInt().withMessage('El precio debe ser un numero')
    ],

    loginDashboard: [
        body('email')
        .notEmpty().withMessage('este campo es obligatorio').bail()
        .isEmail().withMessage('debes colocar un email valido').bail()
        .custom((value, {
            req
        }) => {
            return User.findOne({
                    where: {
                        email: value
                    }
                })
                .then(function (resultado) {
                    if (resultado) {
                        if (!bcrypt.compareSync(req.body.password, resultado.password)) {
                            return Promise.reject('la contraseña o el email no coinciden')
                        }else if(resultado.role < 100){
                            return Promise.reject('no tenés acceso');
                        }
                    } else {
                        return Promise.reject('la contraseña o el email no coinciden');
                    }
                })
        }),
    ],
}