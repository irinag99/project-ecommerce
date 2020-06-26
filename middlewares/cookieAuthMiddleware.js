const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const User = db.User;
const Sequelize = require('sequelize');

function cookieAuthMiddleware (req,res,next){
    if(req.session.user){
        res.locals.user = req.session.user
        return next()
    }else if(req.cookies.user){
        User.findOne({
            where: {
                email: req.cookies.user
            }
        })
            .then(function(user){
                let u = user;
                delete u.password;
                req.session.user = u;
                res.locals.user = u;
                return next();
            })
    }else{
        return next();
    }
}

module.exports = cookieAuthMiddleware