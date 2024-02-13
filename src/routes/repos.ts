import express from "express";
import Repo from "../models/repo";
import bodyParser from "body-parser";
import multer from "multer";
const reposRoute = express.Router();
reposRoute.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./public");
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });
reposRoute.post("/:id", upload.single("preview"), async (req, res) => {
  try {
    const { name, live, github } = req.body;
    const preview = req.file?.path.split("/")[1];
    console.log(preview);
    console.log(req.body);
    console.log(req.file?.path);
    const Techs = req.body.Techs.split("-");
    const newRepo = await Repo.create({
      userID: req.params.id,
      preview,
      name,
      Techs,
      live,
      github,
    });
    res.status(200).send(newRepo);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

reposRoute.get("/:id", async (req, res) => {
  try {
    const allRepos = await Repo.find({ userID: req.params.id });
    res.status(200).send(allRepos);
  } catch (error) {
    res.status(500).send(error);
  }
});
reposRoute.delete("/:id", async (req, res) => {
  const destroy = await Repo.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted successfully");
});
export default reposRoute;
