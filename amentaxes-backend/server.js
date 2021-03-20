const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { MONGODB } = require("./config.js");

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
  subscriptions: {
    path: "/subscription",
    onConnect: (connectionParams) => {
      console.log(connectionParams);
    },
  },
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected!");
    return server.listen({ port: 8000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
