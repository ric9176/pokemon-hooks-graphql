import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";

import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

const configLink = {
  uri: "https://pokemon-samdavies.stylindex.now.sh/"
};

const client = new ApolloClient({
  link: ApolloLink.from([createHttpLink(configLink)]),
  cache: new InMemoryCache()
});

const Root = () => (
  <ApolloHooksProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/:id" component={PokemonDetail} />
        <Route path="/" component={PokemonList} />
      </Switch>
    </Router>
  </ApolloHooksProvider>
);

export default Root;
