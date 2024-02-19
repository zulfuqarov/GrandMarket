import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// import All Route start
import AllRoutes from "./routes/AllRoutes.js";
// import All Route end

dotenv.config();

const Port = process.env.PORT;
const Server = express();

Server.use(bodyParser.json());
Server.use(cors());

Server.use("/api", AllRoutes);

Server.listen(Port, () => {
  console.log(`http://localhost:${Port}`);
});
