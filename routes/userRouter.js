const express = require("express");
const router = express.Router();
const path = require("path");
const validator = require('../middlewares/validator');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

const userController = require("../controllers/userController");




router.get("/login", guestMiddleware ,userController.login);
router.post("/login", validator.login, userController.processLogin);
router.post("/register", validator.register, userController.processRegister);

router.get('/profile', authMiddleware, userController.profile);

module.exports = router;


