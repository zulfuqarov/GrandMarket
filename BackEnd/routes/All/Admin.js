import Admin from "../../model/Admin.js";
import bcrypt from "bcrypt";
import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const router = express.Router();

router.post("/Register", async (req, res) => {
  const body = req.body;

  try {
    if (body && body.email && body.password && body.adminImg) {
      const newAdmin = new Admin(body);

      const adminCheckEmail = await Admin.findOne({
        email: body.email,
      });

      if (adminCheckEmail) {
        return res.status(400).json({ message: "bur email artiq movcutdur" });
      }
      const hashedPassword = await bcrypt.hash(body.password, 10);
      newAdmin.password = hashedPassword;
      await newAdmin.save();
      res.status(200).json(newAdmin);
    } else {
      return res.status(400).json({ message: "butun yerleri doldurun" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "sunucuda xeta bash verdi (Admin)" });
  }
});

router.post("/Sign", async (req, res) => {
  const body = req.body;
  try {
    if (body.email && body.password) {
      const adminSignEmail = await Admin.findOne({
        email: body.email,
      });
      if (adminSignEmail) {
        const adminSiginPassword = await bcrypt.compare(
          body.password,
          adminSignEmail.password
        );
        if (adminSiginPassword) {
          const payload = {
            sub: adminSignEmail._id,
            name: adminSignEmail.name,
            email: adminSignEmail.email,
            adminFoto: adminSignEmail.adminImg,
          };
          const token = await jwt.sign(payload, process.env.TOKEN_SECRET_CODE, {
            expiresIn: "3d",
          });
          res.cookie("jwtToken", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
          });
          return res.status(200).json({
            adminSignEmail,
            message: "Girisiniz ugurla tamamlandi",
            token: token,
          });
        } else {
          return res
            .status(400)
            .json({ message: "email ile password yeniden yoxlayin" });
        }
      } else {
        return res
          .status(400)
          .json({ message: "email ile password yeniden yoxlayin" });
      }
    } else {
      return res.status(400).json({ message: "butun yerleri doldurun" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "sunucu terefde xet bash verdi (Admin Sign)" });
  }
});

router.get("/", async (req, res) => {
  const token = req.cookies.jwtToken;
  try {
    if (token) {
      const decodedToke = jwt.verify(token, process.env.TOKEN_SECRET_CODE);
      req.user = await Admin.findById(decodedToke.sub);
      if (req.user) {
        return res.status(200).json({
          name: req.user.userName,
          email: req.user.email,
          foto: req.user.adminImg,
        });
      } else {
        return res.status(500).json({ message: "Sunucu hatası" });
      }
    } else {
      return res.status(400).json({
        message: "Kimlik dogrulamasi ugursuz oldu... Yeniden deneyin",
      });
    }
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res
        .status(401)
        .json({ message: "JWT süresi doldu. Lütfen tekrar oturum açın." });
    }
    console.log(error);
    res.status(400).json({ message: "serverde xeta bash verdi (Admin Get)" });
  }
});

export default router;
