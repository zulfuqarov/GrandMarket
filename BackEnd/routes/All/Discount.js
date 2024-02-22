import Discount from "../../model/Discount.js";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const newDiscount = new Discount(body);
    await newDiscount.save();
    res.status(200).json(newDiscount);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Discount istekde xeta bash verdi" });
  }
});

router.get("/", async (req, res) => {
  try {
    const GetDiscount = await Discount.find();
    res.status(200).json(GetDiscount);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Discount Get isdeyinde xeta bash verdi" });
  }
});
export default router; 
