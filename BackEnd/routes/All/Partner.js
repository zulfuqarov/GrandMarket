import express from "express";
import Partner from "../../model/Partner.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const GetPartner = await Partner.find();
    res.status(200).json(GetPartner);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "isdek ugursuz oldu yeniden deneyin" });
  }
});

router.post("/AddPartner", async (req, res) => {
  const body = req.body;
  try {
    const newPartner = new Partner(body);
    await newPartner.save();

    res.status(200).json(newPartner);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "isdek ugursuz oldu yeniden ceh edin" });
  }
});

export default router;
