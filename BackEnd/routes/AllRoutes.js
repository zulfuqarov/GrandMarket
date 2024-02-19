import express from "express";
const router = express.Router();

// route start
import Admin from "./All/Admin.js";
// route end

router.use("/Admin", Admin);

export default router;
