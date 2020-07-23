const express = require("express");
const router = express.Router();
const path = require("path");
const categoryController = require("../controllers/categoryController"); 


// GUARDAR ARCHIVOS CON MULTER 
const multer = require("multer")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage });


  // RUTAS
  
  router.get("/:id", categoryController.vista);

module.exports = router;
