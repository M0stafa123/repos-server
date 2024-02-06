import express from "express";
import User from "../models/user";
import bodyParser from "body-parser";
const usersRoute = express.Router();
usersRoute.use(bodyParser.json());
usersRoute.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
    });
    res.status(200).send(newUser);
  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
});

usersRoute.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default usersRoute;
