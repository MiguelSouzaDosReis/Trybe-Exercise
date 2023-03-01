import React from 'react';


class App extends React.Component{
  constructor () {
    super()
    this.PrimeiroClick = this.PrimeiroClick.bind(this)
    this.SegundoClick = this.SegundoClick.bind(this)
    this.PassoOClick = this.PassoOClick.bind(this)
    
  }
  
  PrimeiroClick() {
   console.log('Clicou no botão!')
  }
  SegundoClick() {
   console.log('Clicou 2 vezes no botão!')
  }
   PassoOClick() {
   console.log('Passou o Mouse')
  } 

  render () {
    return (
      <div className="App">
    <button onClick={this.PrimeiroClick}>botão 1</button>
    <button onDoubleClick={this.SegundoClick}>botão 2</button>
    <button onMouseOver={this.PassoOClick}>botão 3</button>
      </div>
    );
  }
}

export default App;
