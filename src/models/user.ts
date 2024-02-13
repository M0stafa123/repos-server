import mongoose, { Schema } from "mongoose";

const User = mongoose.model(
  "user",
  new Schema({
    name: String,
    role: String,
  })
);

export default User;
