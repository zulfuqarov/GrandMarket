import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { Name, Email, Number, Text } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: `${process.env.SMTP_EMAIL_HOST}`,
      port: 465,
      secure: true,
      auth: {
        user: `${process.env.SMTP_EMAIL}`,
        pass: `${process.env.SMPT_PASSWORD}`,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const info = await transporter.sendMail({
      from: `${process.env.SMTP_EMAIL}`,
      to: `${process.env.SMTP_SEN_EMAIL}`,
      subject: "Grandmarket",
      html: `
      <div style="font-family: 'Arial', sans-serif; background-color: #f8f8f8; padding: 20px; text-align: center;">
  <h1 style="color: #333; margin-bottom: 20px; font-size: 28px; font-weight: bold;">İrad və təkliflər</h1>
  <div style="border: 2px solid #333; padding: 20px; background-color: #fff; border-radius: 10px;">
    <h2 style="color: #333; margin-bottom: 10px; font-size: 24px;">Ad: ${Name}</h2>
    <h3 style="color: #333; margin-bottom: 10px; font-size: 20px;">E-posta: ${Email}</h3>
    <h4 style="color: #333; margin-bottom: 10px; font-size: 18px;">Telefon: ${Number}</h4>
    <p style="color: #333; font-size: 20px; margin-top: 10px;">Mesaj: ${Text}</p>
    <img src="https://static.wixstatic.com/media/ae716c_3c71723485e14966bc32032bfd7b8db6~mv2.png/v1/crop/x_135,y_0,w_858,h_440/fill/w_127,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/grand_logo-2.png" alt="Resim" style="max-width: 100%; height: auto; margin-top: 20px; border-radius: 5px;">
  </div>
</div>
            `,
    });
    console.log("message sent" + info.messageId);
    res.send("E-posta gönderildi.");
  } catch (error) {
    console.log(error);
    res.status(500).send("E-posta gönderilemedi.");
  }
});

export default router;
