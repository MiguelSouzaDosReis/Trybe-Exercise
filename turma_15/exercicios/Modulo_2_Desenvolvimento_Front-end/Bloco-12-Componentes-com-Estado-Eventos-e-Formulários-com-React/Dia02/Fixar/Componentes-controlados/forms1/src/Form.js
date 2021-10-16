import React, { Component } from 'react'

class Form extends Component {
  constructor () {
    super()
    this.AreaDeTexto = this.AreaDeTexto.bind(this)
    this.state = {
        texto: ''
      }
  }
  AreaDeTexto(event) {
this.setState({
  texto: event.target.value
})
  }
  
  render() {
    return (  
      <div>
        <form>
   <select>
       <option>1 opção </option>
   </select>
   
   <input type ='color'></input>
   <input type= 'datetime-local'></input>
   <textarea name="texto" value={this.state.texto} onChange={this.AreaDeTexto} />
        </form>
      </div>
    );
  }
}

export default Form;