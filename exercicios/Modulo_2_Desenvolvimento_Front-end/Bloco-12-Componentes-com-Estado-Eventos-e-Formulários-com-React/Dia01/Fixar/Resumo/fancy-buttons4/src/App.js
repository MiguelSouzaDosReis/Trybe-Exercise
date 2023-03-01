// olhei o gabarito para fazer essa parte

import React from 'react';

class App extends React.Component{
  constructor () {
    super()
    this.PrimeiroClick = this.PrimeiroClick.bind(this)
    this.SegundoClick = this.SegundoClick.bind(this)
    this.PassoOClick = this.PassoOClick.bind(this)
    this.state = {
      numero1: 0,
      numero  2: 0,
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
  
  verificar(numero) {
    if (numero % 2 === 0) {
      return 'green'
    } else {
      return 'white'
    }
  }
  
  render () {
    return (
    <div className="App"> 
      <button style={{ backgroundColor: this.verificar(this.state.numero1) }} onClick={this.PrimeiroClick}>botão 1: {this.state.numero1}</button>
        {console.log(this.verificar(this.state.numero1))} 
      <button style={{ backgroundColor: this.verificar(this.state.numero2) }} onDoubleClick={this.SegundoClick}>botão 2: {this.state.numero2}</button>
        {console.log(this.verificar(this.state.numero2))}
      <button style={{ backgroundColor: this.verificar(this.state.numero3) }} onMouseOver={this.PassoOClick}>botão 3: {this.state.numero3}</button>
        {console.log(this.verificar(this.state.numero3))}
    </div>
    );
  }
}

export default App;
