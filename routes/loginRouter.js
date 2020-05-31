const express = require("express");
const router = express.Router();
const path = require("path");
const loginController = require("../controllers/loginController");
const validator = require('../middlewares/validator');


router.get("/", loginController.index);
router.post("/",validator.login , loginController.process)

module.exports = router;