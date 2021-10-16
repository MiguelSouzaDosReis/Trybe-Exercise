import React, { Component } from 'react'
import Opcao from './opiniao'
import Input from './input'
import TextoDeArea from './TextoDeArea'

class Form extends Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
        texto: '',
        checkbox: false,
        data: 0,
        color: '',
        opcao: ''
      }
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    return (  
      <div>
        <form>
    <Opcao value={this.state.opcao} handleChange={this.handleChange}/>
   <fieldset>
   <Input valor1 ={this.state.color} valor2={this.state.data} valor3={this.state.checkbox} handleChange={this.handleChange}/>
   <TextoDeArea value={this.state.texto} handleChange={this.handleChange} />
   </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;