const express = require("express");
const router = express.Router();
const path = require("path");
const homeController = require("../controllers/homeController");


// GUARDAR ARCHIVOS CON MULTER 
const multer = require("multer")
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage });


// RUTAS

router.get("/", homeController.vista);
router.get("/prueba",function(req,res){
  if (req.session.user == undefined){
    res.send("no estas logeado")
  }else{
    res.send("estas logeado "+ req.session.user.email)
  }
})

router.post('/logout', function(req,res){
  req.session.destroy();
  res.clearCookie('user')
  res.redirect('/')
})
module.exports = router;
