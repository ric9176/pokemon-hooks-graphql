import React from "react";
import { Box, Card, Image, Heading, Text } from "rebass";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Text.defaultProps = {
  fontSize: 0,
  mb: 1
};

const PokemonCard = ({ pokemon, showLink }) => {
  const { id, image, name, number, maxCP, maxHP, types } = pokemon;
  return (
    <Box key={id} m={2} width={250}>
      <Card
        p={1}
        m={2}
        borderRadius={2}
        boxShadow="0 0 16px rgba(0, 0, 0, .25)"
      >
        <Image src={image} />
        <Box px={2}>
          <Heading as="h3" pb={1} data-testid="name-display">
            {name}
          </Heading>
          <Text>Number: {number}</Text>
          <Text>maxCP: {maxCP}</Text>
          <Text>maxHP: {maxHP}</Text>
          <Text>
            types:{" "}
            {types && types.length > 1 ? `${types[0]} / ${types[1]}` : types}
          </Text>
          {showLink && <Link to={`/${id}`}>More information</Link>}
        </Box>
      </Card>
    </Box>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    maxCP: PropTypes.number.isRequired,
    maxHP: PropTypes.number.isRequired,
    types: PropTypes.array
  }),
  showLink: PropTypes.bool
};

export default PokemonCard;
