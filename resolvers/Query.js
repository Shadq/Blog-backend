const User = require("../models/userModel");
const Blog = require("../models/blogModel");
const Comment = require("../models/commentModel");

exports.Query = {
  users: async () => {
    const userList = await User.find().populate("blogs").populate("comments");

    return userList;
  },
  blogs: async () => {
    const blogList = await Blog.find().populate("author").populate("comments");

    return blogList;
  },
  comments: async () => {
    const commentList = await Comment.find()
      .populate("blogRef")
      .populate("author");

    return commentList;
  },
  getMe: async (_, { id }) => {
    const user = await User.findOne({ _id: id })
      .populate("blogs")
      .populate("comments");
    return user;
  },
  getMyBlogs: async (_, { userID }) => {
    const blogs = await Blog.find({ author: userID })
      .populate("author")
      .populate({
        path: "comments",
        populate: {
          path: "author",
        },
      });

    console.log(blogs);
    return blogs;
  },
};
