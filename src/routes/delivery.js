const express = require("express");
const deliverySchema = require("../models/delivery");
const router = express.Router();

//create delivery
router.post("/delivery", (req, res) => {
  const delivery = deliverySchema(req.body);
  delivery
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all deliverys
router.get("/deliveries", (req, res) => {
  deliverySchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//get a delivery
router.get("/delivery/:id", (req, res) => {
  const { id } = req.params;
  deliverySchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//update a delivery
router.put("/delivery", (req, res) => {
  deliverySchema
    .updateOne({ _id: req.body._id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//delete a delivery
router.delete("/delivery/:id", (req, res) => {
  const { id } = req.params;
  deliverySchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
