const { model, Schema } = require("mongoose");

const carSchema = new Schema({
  make: String,
  model: String,
  modelYear: String,
  color: String,
  vin: String,
  clutchType: String,
  oilRevision: String,
  itpExpireDate: String,
  rcaExpireDate: String,
  roVigneteExpireDate: String,
});

module.exports = model("Car", carSchema);
