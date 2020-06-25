const express = require("express");
const router = express.Router();
const path = require("path");
const validator = require('../middlewares/validator');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const userController = require("../controllers/userController");



//Guardar imágenes
const multer = require("multer")
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname +'/../public/images/avatars')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage });
//FIN




router.get("/login", guestMiddleware ,userController.login);
router.post("/login", validator.login, userController.processLogin);
router.post("/register", validator.register, userController.processRegister);
router.get('/profile', authMiddleware, userController.profile);
router.post('/profile/edit', upload.any(), authMiddleware, userController.processProfile);

module.exports = router;


