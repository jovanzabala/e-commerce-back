const mongoose = require("mongoose");
Schema = mongoose.Schema;

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  long: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact_name: {
    type: String,
    required: true,
  },
  contact_phone: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.Mixed,
    ref: "category",
  },
});
module.exports = mongoose.model("customer", customerSchema);
