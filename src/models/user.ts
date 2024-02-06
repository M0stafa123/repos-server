import mongoose, { Schema } from "mongoose";

const User = mongoose.model(
  "user",
  new Schema({
    name: String,
  })
);

export default User;
