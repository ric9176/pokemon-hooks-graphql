import { ApolloProvider } from "react-apollo-hooks";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { cleanup, render } from "@testing-library/react";

import { createClient, waitForNextTick } from "../utils/testUtils";
import PokemonDetail, { GET_POKEMON } from "./PokemonDetail";

afterEach(cleanup);

const mock = [
  {
    request: {
      query: GET_POKEMON,
      variables: { id: "UG9rZW1vbjowMDE=" }
    },
    result: {
      data: {
        pokemon: {
          evolutions: [
            {
              id: "UG9rZW1vbjowMDI=",
              image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
              maxCP: 1483,
              maxHP: 1632,
              name: "Ivysaur",
              number: "002",
              types: ["Grass", "Poison"],
              __typename: "Pokemon"
            },
            {
              id: "UG9rZW1vbjowMDM=",
              image: "https://img.pokemondb.net/artwork/venusaur.jpg",
              maxCP: 2392,
              maxHP: 2580,
              name: "Venusaur",
              number: "003",
              types: ["Grass", "Poison"],
              __typename: "Pokemon"
            }
          ],
          id: "UG9rZW1vbjowMDE=",
          image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
          maxCP: 951,
          maxHP: 1071,
          name: "Bulbasaur",
          number: "001",
          types: ["Grass", "Poison"],
          __typename: "Pokemon"
        }
      }
    }
  }
];

describe("<PokemonDetail />", () => {
  it("should render", async () => {
    const client = createClient(mock);
    const { container } = render(
      <Router>
        <ApolloProvider client={client} addTypename={false}>
          <PokemonDetail
            match={{
              isExact: true,
              params: { id: "UG9rZW1vbjowMDE=" },
              path: "/:id",
              url: "/UG9rZW1vbjowMDE="
            }}
          />
        </ApolloProvider>
      </Router>
    );

    // Initially the loading fallback is rendered
    expect(container.textContent).toBe("Loading...");
    // We have to wait for the next tick for the queries to be fetched
    await waitForNextTick();
    expect(container.textContent).toBe(
      "BulbasaurNumber: 001maxCP: 951maxHP: 1071types: Grass / PoisonThis Pokemon has the following evolutions:IvysaurNumber: 002maxCP: 1483maxHP: 1632types: Grass / PoisonVenusaurNumber: 003maxCP: 2392maxHP: 2580types: Grass / Poison"
    );
  });
});
