const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

// GET - no validation required for reading todos
router.get("/", todoController.read);

// POST - add validation for creating a new TODO
router.post(
  "/",
  [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("description").isLength({ min: 5 }).withMessage("Description must be at least 5 characters long"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    next();
  },
  todoController.create
);


router.put(
  "/:id",
  [
    check("id").isNumeric().withMessage("ID must be a number"),
    check("name").optional().not().isEmpty().withMessage("Name cannot be empty if provided"),
    check("description").optional().isLength({ min: 5 }).withMessage("Description must be at least 5 characters long if provided"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    next();
  },
  todoController.update
);


router.delete(
  "/:id",
  [
    check("id").isNumeric().withMessage("ID must be a number"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    next();
  },
  todoController.delete
);

module.exports = router;
