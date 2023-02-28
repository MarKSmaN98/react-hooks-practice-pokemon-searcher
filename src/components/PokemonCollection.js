import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({array}) {

  let cardList = array.map(poke => {
    return <PokemonCard key={poke.name} id={poke.id} poke={poke} />
  })
  console.log('inCollection', array);
  return (
    <Card.Group itemsPerRow={6}>
      <div>
        {cardList}
      </div>
    </Card.Group>
  );
}

export default PokemonCollection;
