import React from 'react';


class App extends React.Component{
  constructor () {
    super()
    this.PrimeiroClick = this.PrimeiroClick.bind(this)
    this.SegundoClick = this.SegundoClick.bind(this)
    this.PassoOClick = this.PassoOClick.bind(this)
    this.state = {
      numero1: 0,
      numero2: 0,
      numero3: 0
    }
    
  }
  
  PrimeiroClick() {
   this.setState((estadoAnterior) => ({
     numero1: estadoAnterior.numero1 +1
   }))
  }
  SegundoClick() {
    this.setState((estadoAnterior) => ({
      numero2: estadoAnterior.numero2 +1
    }))
  }
   PassoOClick() {
    this.setState((estadoAnterior) => ({
      numero3: estadoAnterior.numero3 +1
    }))
  } 

  render () {
    return (
      <div className="App">
    <button onClick={this.PrimeiroClick}>botão 1: {this.state.numero1}</button>
    <button onDoubleClick={this.SegundoClick}>botão 2: {this.state.numero2}</button>
    <button onMouseOver={this.PassoOClick}>botão 3: {this.state.numero3}</button>
      </div>
    );
  }
}

export default App;
