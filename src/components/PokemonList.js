import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Flex } from 'rebass'

import PokemonCard from './PokemonCard'

export const pokemonInfo = {
  info: gql`
    fragment Info on Pokemon {
      id
      number
      name
      maxCP
      maxHP
      image
      types
    }
  `
}

export const GET_POKEMONS = gql`
  {
    pokemons(first: 10) {
      ...Info
    }
  }
  ${pokemonInfo.info}
`

const PokemonList = () => {
  const { data, error, loading } = useQuery(GET_POKEMONS)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }
  return (
    <React.Fragment>
      <Flex flexWrap="wrap">
        {data.pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} showLink />
        ))}
      </Flex>
    </React.Fragment>
  )
}

export default PokemonList
