import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: String,
  number: Number,
});

export const userSchema =
  mongoose.models?.users || mongoose.model("users", schema);
