const db = require('../database/models')

function contadorMiddleware(req,res,next){
    if (req.session.user!=undefined){
        db.Cart.findAll({
            where:{
                idUser: req.session.user.id,
                state:0
            }
        })
        .then(cart=>{
            req.session.contador= cart
            res.locals.contador=cart
            return next()
        })
    }else{
       return next()
    }
}

module.exports = contadorMiddleware;