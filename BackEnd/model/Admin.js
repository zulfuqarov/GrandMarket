import mongoose from "mongoose";

const Admin = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  adminImg: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Admins", Admin);
