const bcrypt = require("bcryptjs")
const { validationResult } = require('express-validator');
const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const User = db.User;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const userController = {
    login: function (req, res) {
        res.render('user/login')
    },
    processLogin: function (req, res) {
        const errors = validationResult(req);
        if (errors.isEmpty()) {

            User.findOne({
                where: {
                    email: req.body.emaillogin
                }
            })
                .then(function (usuario) {
                    let u = usuario;
                    delete u.password;
                    req.session.user = u;
                    if (req.body.remember != undefined) {
                        res.cookie('user', u.email, { maxAge: 1000 * 60 * 60 });
                    }
                    return res.redirect('/');
                })
        } else {
            return res.render('user/login', { errors: errors.mapped(), oldS: req.body })
        }

    },

    processRegister: function (req, res) {

        const errors = validationResult(req);

        //return res.send(errors)

        if (errors.isEmpty()) {

            let user = req.body;
            delete user.passwordR
            user.password = bcrypt.hashSync(user.password, 10);
            user.rol = 0;
            user.avatar = 'avatarDefault.jpg';

            //return res.send(usuario);

            User.create(user)
                .then(function (usuario) {
                    let u = usuario;
                    delete u.name;
                    delete u.surname;
                    delete u.password;
                    delete u.passwordR;
                    req.session.user = u;
                    res.redirect('/');
                })
        } else {
            return res.render('user/login', { errors: errors.mapped(), old: req.body })
        }

    },
    profile: function (req, res) {
        User.findOne({
            where: {
                email: req.session.user.email
            },
            include: [
                { association: 'addresses' }
                // { 
                //     association:'orders',
                //     include:[{association: 'cart'}]
                // }
            ]
        }).then(user =>{
            // console.log(user)
            // console.log(user.addresses)
            // console.log(user.orders)
            // console.log(user.orders.cart)
            return res.render('user/profile', {user});
        })
       
    },
    processProfile: (req, res) => {

        let update = {
            name: req.body.name,
            surname: req.body.surname,
            description: req.body.description
        }

        if (req.files[0] != undefined) {
            update.avatar = req.files[0].filename
        }

        User.update(update, {
            where: {
                email: req.session.user.email
            }
        })
            .then(function (resultado) {
                return User.findOne({
                    where: {
                        email: req.session.user.email
                    }
                })

            })
            .then((e) => {
                req.session.user = e
                return res.redirect("/user/profile")
            })
    },
    storeAddress: (req,res)=>{
        let newAddress = {
            street: req.body.street,
            number: req.body.number,
            PC: req.body.PC,
            apartment: req.body.apartment == '' ? null : req.body.apartment,
            province: req.body.province,
            municipality: req.body.municipality,
            description: req.body.description == '' ? null : req.body.description,
            idUser: req.body.id
        }
        db.Address.create(newAddress)
        .then(address=>{
            return res.redirect('/user/profile')
        })
    },
    destroyAddress: (req,res)=>{
        db.Address.destroy({
            where: {
                id: req.body.idAddress
            }
        })
        .then(address=>{
            return res.redirect('/user/profile')
        })
    }

}


module.exports = userController;