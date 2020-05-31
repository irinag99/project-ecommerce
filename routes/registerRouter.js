const express = require("express");
const router = express.Router();
const path = require("path");
const validator = require('../middlewares/validator');

const registerController = require("../controllers/registerController")

router.get("/", registerController.index);
router.post("/",validator.register, registerController.process)


module.exports = router;