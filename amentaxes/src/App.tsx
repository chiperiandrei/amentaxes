import { ApolloProvider } from "@apollo/client";
import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Users from "./components/Users";
import { WrapperContentStyle } from "./shared/styled/GlobalStyle";
import apolloClient from "./utils/apolloClient";

function App() {
  const client = apolloClient();
  return (
    <ApolloProvider client={client}>
      <WrapperContentStyle>
        <Header />
        <Users />
        <Footer />
      </WrapperContentStyle>
    </ApolloProvider>
  );
}

export default App;
