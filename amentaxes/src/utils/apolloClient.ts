import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = () => {
  const client = new ApolloClient({
    uri: "http://localhost:8000/",
    cache: new InMemoryCache(),
  });
  return client;
};

export default apolloClient;
