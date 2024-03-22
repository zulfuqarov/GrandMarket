import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
// import All Route start
import AllRoutes from "./routes/AllRoutes.js";
// import All Route end

// import corsOptions start
const corsOptions = {
  origin: "*",
  credentials: true,
};
// import corsOptions end

dotenv.config();

// Config Clodinary start
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});
// Config Clodinary end

const Port = process.env.PORT;
const Server = express();
Server.use(cookieParser());
Server.use(bodyParser.json());
Server.use(cors(corsOptions));
Server.use(fileUpload({ useTempFiles: true }));
// Connecting MongoDB start
const ConnectingDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTING_MONGO_DB);
    console.log("MongoDB Connecting :)");
  } catch (error) {
    console.log(error);
  }
};
// Connecting MongoDB end
// ---------------------

Server.use("/api", AllRoutes);

Server.listen(Port, async () => {
  try {
    await ConnectingDb();
    console.log(`http://localhost:${Port}`);
  } catch (error) {
    console.log(error);
    console.log("baglantida problem bash verdi");
  }
});
