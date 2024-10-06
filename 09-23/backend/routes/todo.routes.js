const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

// /cats/ Get endpoint level middleware
router.get("/", todoController.read);
router.post("/", todoController.create);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.delete);

module.exports = router;