import mongoose, { Schema } from "mongoose";

const DiscountImg = new Schema({
  DiscountImg: {
    type: String,
    required: true,
  },
});

export default mongoose.model("DiscountImgs", DiscountImg);
