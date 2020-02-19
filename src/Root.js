import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'

import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://graphql-pokemon.now.sh'
  })
})

const Root = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/:pokemonId" component={PokemonDetail} />
        <Route path="/" component={PokemonList} />
      </Switch>
    </Router>
  </ApolloProvider>
)

export default Root
