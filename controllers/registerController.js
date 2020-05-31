const bcrypt = require("bcryptjs")
const jsonModel = require("../models/jsonModel")
const userModel = jsonModel('users')
const { validationResult } = require('express-validator');

const registerController = {
    index: function(req, res){
        return  res.render('login')
    },
    process: function(req,res) {
        
      const errors = validationResult(req);
      
      //return res.send(errors)

      if(errors.isEmpty()){
         req.body.password = bcrypt.hashSync(req.body.password, 10);
   
         delete req.body.passwordR;
   
   
         const newUser = {
            id: userModel.nextID(),
            ...req.body
          
         }
   
         userModel.save(newUser);
   
         return res.redirect('/');
      }

      return res.render('login', { errors: errors.mapped(), old: req.body})
       /*  req.body.password = bcrypt.hashSync(req.body.password, 10);
        delete req.body.passwordR
         
        const newUser ={
            id:userModel.nextID(),
            ...req.body,
        }
        userModel.save(newUser);
        res.redirect("/")
    } */
    }
}
module.exports = registerController