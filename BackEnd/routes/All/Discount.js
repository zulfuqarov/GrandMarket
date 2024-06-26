import Discount from "../../model/Discount.js";
import express from "express";
import cloudinary from "cloudinary";
const router = express.Router();

router.post("/DiscountPost", async (req, res) => {
  if (!req.files || !req.files.image) {
    return res.status(400).json({ message: "Şəkil əlavə olunmayıb !" });
  }
  const ImageFolder = req.files.image.tempFilePath;
  const body = req.body;
  try {
    if (
      body.Category &&
      body.Name &&
      body.Price &&
      body.OldPrice &&
      ImageFolder
    ) {
      const result = await cloudinary.uploader.upload(ImageFolder, {
        use_filename: true,
        folder: "Home",
      });

      const newDiscount = new Discount({
        Category: body.Category,
        Name: body.Name,
        Img: result.url,
        Price: body.Price,
        OldPrice: body.OldPrice,
      });
      await newDiscount.save();

      res.status(200).json({ message: "Məhsul əlavə olundu !", newDiscount });
    } else {
      return res.status(400).json({
        message:
          "Məhsul əlavə olunmadı, Yenidən yoxlayın  Yerləri tamamlayın !",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Discount istekde xeta bash verdi" });
  }
});

router.delete("/DiscountDelet/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const DeletingDiscount = await Discount.findByIdAndDelete({
      _id: id,
    });
    if (!DeletingDiscount) {
      return res
        .status(400)
        .json({ message: "Silme isleminde xeta bash verdi" });
    } else {
      return res.status(200).json({
        message: "Silme islemi ugurla tamamlandi",
        delete: DeletingDiscount,
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Silme islemitde xeta bash verdi (server)" });
  }
});

router.get("/", async (req, res) => {
  try {
    const GetDiscount = await Discount.find();
    if (GetDiscount.length > 0) {
      res.status(200).json(GetDiscount);
    } else {
      return res
        .status(400)
        .json({ message: "Get isdeyinde xeta bash verdi (Server)" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Discount Get isdeyinde xeta bash verdi" });
  }
});

router.get("/Filter/:FilteringCategory", async (req, res) => {
  const { FilteringCategory } = req.params;
  try {
    const DiscountFind = await Discount.find();
    const FilteringDiscount = DiscountFind.filter((oneFilter) => {
      return oneFilter.Category.toLowerCase().includes(
        FilteringCategory.toLowerCase()
      );
    });

    if (FilteringDiscount.length > 0) {
      res.status(200).json(FilteringDiscount);
    } else {
      res.status(400).json({ message: "Axdardiginiz mehsul tapilmadi" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Filterleme de xeta bash verdi (server)" });
  }
});
export default router;
