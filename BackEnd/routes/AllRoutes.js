import express from "express";
const router = express.Router();

// route start
import Admin from "./All/Admin.js";
import Email from "./All/SendEmail.js";
import Partner from "./All/Partner.js";
import Discount from "./All/Discount.js";
// route end

router.use("/Admin", Admin);
router.use("/Email", Email);
router.use("/Partner", Partner);
router.use("/Discount", Discount);

export default router;
