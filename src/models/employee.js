const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img_photo: {
    type: String,
    required: true,
  },
  img_cedula_front: {
    type: String,
    required: true,
  },
  img_cedula_back: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("employee", employeeSchema);
