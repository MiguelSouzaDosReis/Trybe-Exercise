import './App.css';
import Pokemons from './pokemon';
import data from './data'

function App() {
  return (
    <div className = 'pokedex'>
      <Pokemons pokemons = {data[0]}/> 
      <Pokemons pokemons = {data[1]}/>
      <Pokemons pokemons = {data[2]}/>
      <Pokemons pokemons = {data[3]}/>
      <Pokemons pokemons = {data[4]}/>
      <Pokemons pokemons = {data[5]}/>
      <Pokemons pokemons = {data[6]}/>
      <Pokemons pokemons = {data[7]}/>
      <Pokemons pokemons = {data[8]}/>
    </div>
  );
}

export default App;
