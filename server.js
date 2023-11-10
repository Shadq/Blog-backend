const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { typeDefs } = require("./schema");
require("dotenv").config();

const connect = () => {
  try {
    const connection = mongoose.connect(
      `mongodb+srv://shadq:${process.env.MONGODB_PASSWORD}@cluster0.cgipret.mongodb.net/blog-app`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`An error accured: ${error}`);
  }
};

connect();

const server = new ApolloServer({ typeDefs, resolvers: { Query, Mutation } });

server.listen().then(({ url }) => {
  console.log(`Server running on port ${url}`);
});
