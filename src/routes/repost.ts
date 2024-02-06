import express from "express";
import Repo from "../models/repo";
import bodyParser from "body-parser";

const reposRoute = express.Router();
reposRoute.use(bodyParser.json());

reposRoute.post("/:id", async (req, res) => {
  try {
    const { preview, name, Techs, live, github } = req.body;
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
