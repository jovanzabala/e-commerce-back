const express = require("express");
const categorySchema = require("../models/category");
const router = express.Router();

//create category
router.post("/category", (req, res) => {
  const category = categorySchema(req.body);
  category
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all categories
router.get("/categories", (req, res) => {
  categorySchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//get a category
router.get("/category/:id", (req, res) => {
  const { id } = req.params;
  categorySchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//update a category
router.put("/category", (req, res) => {
  categorySchema
    .updateOne({ _id: req.body._id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//delete a category
router.delete("/category/:id", (req, res) => {
  const { id } = req.params;
  categorySchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
