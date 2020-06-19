const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Usuario = db.Usuario;
const Sequelize = require('sequelize');

function cookieAuthMiddleware (req,res,next){
    if(req.cookies.usuario  && req.session.user == undefined){
        Usuario.findOne({
            where: {
                email: req.cookies.usuario
            }
        })
            .then(function(usuario){
                let u = usuario;
                delete u.password;
                req.session.user = u;
            })
    }next();
}

module.exports = cookieAuthMiddleware