const mongoose = require("mongoose");

const deliverySchema = mongoose.Schema({
  customer_id: {
    type: String,
    required: true,
  },
  employee_id: {
    type: String,
    required: true,
  },
  from: {
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  to: {
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  Observation: {
    type: String,
    required: false,
  },
  start_datetime: {
    type: Date,
    default: Date.now,
  },
  end_datetime: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("delivery", deliverySchema);
