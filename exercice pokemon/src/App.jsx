import { useState } from 'react'
import PokemonCard from "./components/PokemonCard"
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "salameh",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [index, setIndex] = useState(0);
  let pokemon = pokemonList[index];
  const prevpokemon = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  const suivantPokemon = () => {
    if (index < pokemonList.length - 1) {
      setIndex(index + 1);
    }
  }
  return (
    <div className='App'>
      <PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
      <button onClick={prevpokemon}>Précédent</button>
      <button onClick={suivantPokemon}>Suivant</button>
    </div>
  )
}

export default App;
