const User = require("../models/userModel");
const Blog = require("../models/blogModel");
const Comment = require("../models/commentModel");

exports.Mutation = {
  createUser: async (parent, { input }, context) => {
    const { name, email, password } = input;

    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });

    console.log(newUser);
    return newUser;
  },
  createBlog: async (parent, { input }, context) => {
    const { title, content, author } = input;

    const newBlog = await Blog.create({
      title: title,
      content: content,
      author: author,
    });

    const user = await User.findByIdAndUpdate(
      author,
      {
        $push: {
          blogs: newBlog._id,
        },
      },
      { new: true }
    );

    return await newBlog.populate("author");
  },
  createComment: async (parent, { input }, context) => {
    const { title, content, author, blogRef } = input;

    const newComment = await Comment.create({
      title: title,
      content: content,
      author: author,
      blogRef: blogRef,
    });

    const blog = await Blog.findByIdAndUpdate(
      blogRef,
      {
        $push: {
          comments: newComment._id,
        },
      },
      { new: true }
    );

    const user = await User.findByIdAndUpdate(
      author,
      {
        $push: {
          comments: newComment._id,
        },
      },
      { new: true }
    );

    return newComment;
  },
};
