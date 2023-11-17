import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  userId: String,
  totalClick: Number,
  longUrl: String,
  shortUrl: {
    type: String,
    unique: true,
  },
});

export const linkSchema =
  mongoose.models?.links || mongoose.model("links", schema);
