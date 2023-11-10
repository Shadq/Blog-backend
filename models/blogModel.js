const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, min: 3, max: 20, required: true },
    content: { type: String, required: true },
    likes: { type: Number, required: true, default: 0 },
    author: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    comments: [
      { type: mongoose.SchemaTypes.ObjectId, ref: "Comment", default: [] },
    ],
  },
  { timestamps: true, collection: "blogs" }
);

module.exports = mongoose.model("Blog", blogSchema);
