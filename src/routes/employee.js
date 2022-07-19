const express = require("express");
const employeeSchema = require("../models/employee");
const router = express.Router();

//create employee
router.post("/employee", (req, res) => {
  const employee = employeeSchema(req.body);
  employee
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all employees
router.get("/employees", (req, res) => {
  employeeSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//get a employee
router.get("/employee/:id", (req, res) => {
  const { id } = req.params;
  employeeSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//update a employee
router.put("/employee", (req, res) => {
  employeeSchema
    .updateOne({ _id: req.body._id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//delete a employee
router.delete("/employee/:id", (req, res) => {
  const { id } = req.params;
  employeeSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
