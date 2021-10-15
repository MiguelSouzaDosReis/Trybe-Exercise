// olhei o gabarito para pegar o CSS

import './App.css';
import Pokemons from './pokemon';
import data from './data'

function App() {
  return (
    <div className = 'pokedex'>
     {
     data.forEach(element => {
      return <Pokemons pokemons = {element} />
       })
     }
    </div>
  );
}

export default App;
