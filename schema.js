const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    users: [User]
    blogs: [Blog]
    comments: [Comment]
    getMe(id: ID!): User!
    getMyBlogs(userID: ID!): [Blog]
  }

  type Mutation {
    createUser(input: UserInput): User!
    createBlog(input: BlogInput): Blog!
    createComment(input: CommentInput): Comment!
  }

  type User {
    name: String!
    email: String!
    password: String!
    blogs: [Blog]
    comments: [Comment]
    id: ID!
  }

  type Blog {
    title: String!
    content: String!
    author: User!
    likes: Int!
    comments: [Comment]
    id: ID!
  }

  type Comment {
    title: String!
    content: String!
    author: User!
    blogRef: Blog!
    id: ID!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  input BlogInput {
    title: String!
    content: String!
    author: ID!
  }

  input CommentInput {
    title: String!
    content: String!
    author: ID!
    blogRef: ID!
  }
`;
