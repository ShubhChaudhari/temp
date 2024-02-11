const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  brandName: {
    type: String,
    require: true,
  },
  brandCode: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Brand", BrandSchema) 
