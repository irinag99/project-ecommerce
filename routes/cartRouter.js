const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");


router.get("/", cartController.index);

module.exports = router;