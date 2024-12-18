const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = require("../middleware/multer");
const recipeController = require("../controllers/recipe.controller");

router.post("/", upload.single("image"), recipeController.find);

module.exports = router;
