import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import router from "./routes";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.URI as string);

const port = 1000;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("welcom");
});
app.listen(port, async () => {
  console.log("server runing on http://localhost:" + port);
});
