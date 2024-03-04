import express from "express";
import Partner from "../../model/Partner.js";
import cloudinary from "cloudinary";
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
  if (!req.files || !req.files.PartnerImg) {
    return res.status(400).json({ message: "Şəkil əlavə olunmayıb !" });
  }
  const ImageFolder = req.files.PartnerImg.tempFilePath;
  const body = req.body;
  try {
    if (ImageFolder && body.PartnerName && body.PartnerPosition) {
      const result = await cloudinary.uploader.upload(ImageFolder, {
        use_filename: true,
        folder: "Home",
      });
      const newPartner = new Partner({
        PartnerName: body.PartnerName,
        PartnerPosition: body.PartnerPosition,
        PartnerImg: result.url,
      });
      await newPartner.save();

      res
        .status(200)
        .json({ message: "Department elave olundu !", newPartner });
    } else {
      return res.status(400).json({
        message:
          "Depatment əlavə olunmadı, Yenidən yoxlayın  Yerləri tamamlayın !",
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "isdek ugursuz oldu yeniden ceh edin" });
  }
});

export default router;
