import { ApolloProvider } from "react-apollo-hooks";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { cleanup, render } from "@testing-library/react";

import { createClient, waitForNextTick } from "../utils/testUtils";
import PokemonList, { GET_POKEMONS } from "./PokemonList";

afterEach(cleanup);

const mock = [
  {
    request: {
      query: GET_POKEMONS,
      variables: {}
    },
    result: {
      data: {
        pokemons: [
          {
            id: "UG9rZW1vbjowMDE=",
            image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
            maxCP: 951,
            maxHP: 1071,
            name: "Bulbasaur",
            number: "001",
            types: ["Grass", "Poison"],
            __typename: "Pokemon"
          }
        ]
      }
    }
  }
];

describe("<PokemonList />", () => {
  it("should render", async () => {
    const client = createClient(mock);
    const { container, getByText } = render(
      <Router>
        <ApolloProvider client={client} addTypename={false}>
          <PokemonList />
        </ApolloProvider>
      </Router>
    );

    // Initially the loading fallback is rendered
    expect(container.textContent).toBe("Loading...");
    // We have to wait for the next tick for the queries to be fetched
    await waitForNextTick();
    expect(container.innerHTML).toContain("More information");
    expect(container.textContent).toBe(
      "BulbasaurNumber: 001maxCP: 951maxHP: 1071types: Grass / PoisonMore information"
    );
  });
});
