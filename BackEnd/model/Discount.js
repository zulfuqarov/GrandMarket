import mongoose from "mongoose";

const Discount = mongoose.Schema({
  Category: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  OldPrice: {
    type: Number,
    required: true,
  },
  Img: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Discounts", Discount);
