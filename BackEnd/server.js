import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// import All Route start
import AllRoutes from "./routes/AllRoutes.js";
// import All Route end

dotenv.config();

const Port = process.env.PORT;
const Server = express();

Server.use(bodyParser.json());
Server.use(cors());

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
