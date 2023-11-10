const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, min: 3, max: 20, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, min: 3, max: 50, required: true },
    blogs: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        type: String,
        ref: "Blog",
        required: false,
        default: [],
      },
    ],
    comments: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        type: String,
        ref: "Comment",
        required: false,
        default: [],
      },
    ],
  },
  { timestamps: true, collection: "users" }
);

module.exports = mongoose.model("User", userSchema);
