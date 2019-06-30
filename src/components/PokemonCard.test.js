import React from "react";
import { render } from "@testing-library/react";
import PokemonCard from "./PokemonCard";
import { BrowserRouter as Router } from "react-router-dom";

const pokemon = {
  id: "UG9rZW1vbjowMDE=",
  image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
  maxCP: 951,
  maxHP: 1071,
  name: "Bulbasaur",
  number: "001",
  types: ["Grass", "Poison"],
  __typename: "Pokemon"
};

describe("<PokemonCard />", () => {
  it("renders the card with the correntname", () => {
    const { getByTestId } = render(
      <Router>
        <PokemonCard pokemon={pokemon} showLink />
      </Router>
    );
    expect(getByTestId("name-display").textContent).toBe("Bulbasaur");
  });

  it("Conditionally renders the showMore with link", () => {
    const { container } = render(
      <Router>
        <PokemonCard pokemon={pokemon} showLink />
      </Router>
    );
    expect(container.textContent).toContain("More information");
  });
  it("Doesnt render show More link without prop", () => {
    const { container } = render(
      <Router>
        <PokemonCard pokemon={pokemon} showLink={false} />
      </Router>
    );
    expect(container.textContent).not.toContain("More information");
  });
});
