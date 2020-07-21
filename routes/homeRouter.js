const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
const path = require("path");
const homeController = require("../controllers/homeController");
const bodyParser = require("body-parser")


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
  console.log(req.session);
    if (req.session.dashboardUser == undefined){
    res.send("no estas logeado")
  }else{
    res.send("estas logeado "+ req.session.dashboardUser)
  }
})

router.post('/logout', function(req,res){
  req.session.destroy();
  res.clearCookie('user')
  res.redirect('/')
})

//Enviar email
router.post('/sendEmail',function(req,res){
  console.log(req.body)
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "enviofarmaciadigital@gmail.com",
    pass: "papitaloca23"
  }
});

let mailOptions = {
  from: "enviofarmaciadigital@gmail.com",
  to: "recibidofarmaciadigital@gmail.com",
  subject: "Contacto nuevo generado",
  text: "Email a contactar : " + req.body.emailSend,
}

transporter.sendMail(mailOptions, (err, data) => {
  res.redirect("/")
})
})
module.exports = router;

