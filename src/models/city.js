import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  flag: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  country_code: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

const City = mongoose.models?.City || mongoose.model("City", citySchema);
export default City;