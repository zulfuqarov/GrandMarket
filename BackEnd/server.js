import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// import All Route start
import AllRoutes from "./routes/AllRoutes.js";
// import All Route end

// import corsOptions start
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
// import corsOptions end

dotenv.config();

const Port = process.env.PORT;
const Server = express();
Server.use(cookieParser());
Server.use(bodyParser.json());
Server.use(cors(corsOptions));

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
