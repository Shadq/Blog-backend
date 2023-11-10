const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    title: { type: String, min: 1, max: 25, required: true },
    content: { type: String, min: 1, max: 250, required: true },
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    blogRef: { type: mongoose.SchemaTypes.ObjectId, ref: "Blog" },
  },
  { timestamps: true, collection: "comments" }
);

module.exports = mongoose.model("Comment", commentSchema);
