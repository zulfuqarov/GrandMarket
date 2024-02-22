import mongoose from "mongoose";

const Partner = new mongoose.Schema({
  PartnerName: {
    type: String,
    required: true,
  },
  PartnerPosition: {
    type: String,
    required: true,
  },
  PartnerImg: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Partners", Partner);
