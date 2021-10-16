import React, { Component } from 'react'

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
   <select name='opcao' value={this.state.opcao} onChange={this.handleChange}>
       <option>1 opção </option>
       <option>2 opção</option>
   </select>
   <fieldset>
   <input name='color' value={this.state.color} onChange={this.handleChange} type ='color'></input>
   <input name='data' value={this.state.data} onChange={this.handleChange} type= 'datetime-local'></input>
   <textarea name="texto" value={this.state.texto} onChange={this.handleChange} />
   <input name='checkbox' value={this.state.checkbox} onChange={this.handleChange} type='checkbox'/>
   </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;