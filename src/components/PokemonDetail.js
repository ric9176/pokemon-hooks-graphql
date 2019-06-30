import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import PropTypes from "prop-types";
import { Flex, Heading } from "rebass";

import { pokemonInfo } from "./PokemonList";
import PokemonCard from "./PokemonCard";

export const GET_POKEMON = gql`
  query singlePokemon($id: String) {
    pokemon(id: $id) {
      ...Info
      evolutions {
        id
        number
        name
        maxCP
        maxHP
        image
        types
      }
    }
  }
  ${pokemonInfo.info}
`;

function Photo({ match }) {
  const pokemonId = match.params.id;
  const { data, error, loading } = useQuery(GET_POKEMON, {
    variables: { id: pokemonId }
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }
  const { pokemon } = data;
  return (
    <React.Fragment>
      <PokemonCard pokemon={pokemon} />
      {pokemon.evolutions ? (
        <React.Fragment>
          <br />
          <Heading as="h4" m={2}>
            This Pokemon has the following evolutions:
          </Heading>
          <Flex flexWrap="wrap">
            {pokemon.evolutions.map(evolution => (
              <PokemonCard key={evolution.id} pokemon={evolution} />
            ))}
          </Flex>
        </React.Fragment>
      ) : (
        <Heading as="h4" m={2}>
          This Pokemon has no further evolutions!
        </Heading>
      )}
    </React.Fragment>
  );
}

Photo.propTypes = {
  match: PropTypes.object.isRequired
};

export default Photo;
