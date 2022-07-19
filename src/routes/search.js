const express = require("express");
const router = express.Router();
const categorySchema = require("../models/category");
const customerSchema = require("../models/customer");
const employeeSchema = require("../models/employee");
const app = express();

app.use(express.json());

router.get("/search/:name", async (req, res) => {
  await categorySchema
    .find({
      $or: [{ name: { $regex: req.params.name } }],
    })
    .then((data) => res.json(data));
});

router.get("/search/:name", async (req, res) => {
  await customerSchema
    .find({
      $or: [{ name: { $regex: req.params.name } }],
    })
    .then((data) => res.json(data));
});

router.get("/search/:name", async (req, res) => {
  await employeeSchema
    .find({
      $or: [{ name: { $regex: req.params.name } }],
    })
    .then((data) => res.json(data));
});

module.exports = router;
