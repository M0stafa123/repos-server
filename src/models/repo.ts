import mongoose, { Schema } from "mongoose";

const Repos = mongoose.model(
  "repos",
  new Schema({
    userID: String,
    preview: String,
    name: String,
    Techs: Array,
    live: String,
    github: String,
  })
);

export default Repos;
