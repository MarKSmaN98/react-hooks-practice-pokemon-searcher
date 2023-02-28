import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeArr, setPokeArr] = useState([]);
  const [search, setSearch] = useState('');
  const [foundArray, setFoundArr] = useState([]);

  useEffect( () => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(pokeArray => {
        setPokeArr(pokeArray);
      })
  }, [search])

  const filterSearch = (filter) => {
    filter = filter.toLowerCase();
    let foundArr = pokeArr.filter(poke => {
      //console.log(poke.name);
      return ((poke.name.includes(filter)) || (poke.hp.toString().includes(filter)));
    });
    setFoundArr(foundArr);
    console.log('found: ',foundArr);
  }

  console.log(foundArray)
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search setSearch={setSearch} filterSearch={filterSearch} search={search}/>
      <br />
      <PokemonCollection array={((search == '')? pokeArr : foundArray)}/>
    </Container>
  );
}

export default PokemonPage;
