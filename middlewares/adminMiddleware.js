const db = require('../database/models')

function admin(req,res,next){
    if (req.session.user!=undefined){
        db.User.findOne({
            where:{
                email: req.session.user.email
            }
        })
        .then(user=>{
            if (user.role===100){
                return next();
            }else{
                return res.send('Acceso denegado')
            }
        })
    }
}

module.exports = admin;