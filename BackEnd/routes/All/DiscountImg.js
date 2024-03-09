import DiscountImg from "../../model/DiscountImg.js";
import express from "express";
import cloudinary from "cloudinary";
const router = express.Router();

router.post("/Adding", async (req, res) => {
  if (!req.files || !req.files.image) {
    return res.status(400).json({ message: "şəkil əlavə olunmayıb!" });
  }
  try {
    const ImageFoler = req.files.image.tempFilePath;
    const result = await cloudinary.uploader.upload(ImageFoler, {
      use_filename: true,
      folder: "Home",
    });
    const newDiscountImage = new DiscountImg({
      DiscountImg: result.url,
    });
    await newDiscountImage.save();
    res
      .status(200)
      .json({ message: "Şəkil uğurla yükləndi", newDiscountImage });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "DiscountImage istekde xeta bash verdi (Server)" });
  }
});

router.get("/", async (req, res) => {
  try {
    const GetDiscountImg = await DiscountImg.find();
    res.status(200).json(GetDiscountImg);
  } catch (error) {
    console.log(error);
  }
});

export default router;
