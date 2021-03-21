import { ApolloProvider } from "@apollo/client";
import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionFirstPage from "./components/SectionFirstPage";
import { RootState } from "./reducers/rootReducers";
import apolloClient from "./utils/apolloClient";

function App() {
  const client = apolloClient();
  const data = useSelector((state: RootState) => state.user_information);
  const { token, firstname, lastname } = data
    ? data
    : { token: undefined, firstname: undefined, lastname: undefined };

  return (
    <ApolloProvider client={client}>
      {/* <WrapperContentStyle> */}
      <Header />
      {token && <Dashboard />}
      {!token && <SectionFirstPage />}
      <Footer willBeFix={token ? false : true} />
      {/* </WrapperContentStyle> */}
    </ApolloProvider>
  );
}

export default App;
