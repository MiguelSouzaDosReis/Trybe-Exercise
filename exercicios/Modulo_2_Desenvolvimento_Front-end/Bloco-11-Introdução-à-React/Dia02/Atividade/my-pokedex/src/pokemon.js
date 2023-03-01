  import React from 'react';

class Pokemons extends React.Component {
  render() {
    const { name, type, image, averageWeight} = this.props.pokemons;

    return (
      <div className = 'pokemon'>
          <p> Nome: {name}  Tipo: {type}</p>
          <img src = {image}></img>
          <p> averageWeight {averageWeight.value} {averageWeight.measurementUnit}</p>
      </div>

 
    );
  }
}
export default Pokemons