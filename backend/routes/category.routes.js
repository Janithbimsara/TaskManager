const express = require("express");
const { getAllCategories,getCategoryByName,createCategory ,updateCategory} = require("../controllers/category.controller");

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:name", getCategoryByName);
router.post("/", createCategory);
router.put("/:id", updateCategory);

module.exports = router;
