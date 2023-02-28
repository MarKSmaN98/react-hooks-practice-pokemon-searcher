import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {

  const [pokeCard, setPokeCard] = useState({});
  const [pokeName, setPokeName] = useState('');
  const [pokeHp, setPokeHp] = useState(0);
  const [pokeImgFront, setPokeImgFront] = useState('');
  const [pokeImgRear, setPokeImgRear] = useState('');

  
  const createCard = () => {
    let newCard = {
      name: pokeName,
      hp: pokeHp,
      sprites: {
        front: pokeImgFront,
        back: pokeImgRear
      }
    }
    console.log(newCard);
    fetch('http://localhost:3001/pokemon/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCard)
    })
      .then(res => res.json())
      .then(res => {
        setPokeCard(newCard);
        alert("Success!");
      })
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          createCard();
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={e => setPokeName(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={e => setPokeHp(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={e => setPokeImgFront(e.target.value)}
            required
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={e => setPokeImgRear(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
