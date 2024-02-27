import Discount from "../../model/Discount.js";
import express from "express";

const router = express.Router();

router.post("/DiscountPost", async (req, res) => {
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

router.post("/Filter", async (req, res) => {
  const { FilterName } = req.body;
  try {
    const DiscountFind = await Discount.find();
    const FilteringDiscount = DiscountFind.filter((oneFilter) => {
      return oneFilter.Name.toLowerCase().includes(FilterName.toLowerCase());
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

router.delete("/DiscountDelet/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const DeletingDiscount = await Discount.findByIdAndDelete({
      _id: id,
    });
    if (!DeletingDiscount) {
      res.status(400).json({ message: "Silme isleminde xeta bash verdi" });
    } else {
      res.status(200).json({
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
    res.status(200).json(GetDiscount);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Discount Get isdeyinde xeta bash verdi" });
  }
});
export default router;