import React, { Component } from 'react'
import Nome from './Nome'
import Email from './Email'
import Cpf from './Cpf'
import Endereco from './Endereco'
import Cidade from './Cidade'
import Estado from './Estado'
import Casa from './Casa'
import Curriculo from './curriculo'
import Cargo from './Cargo'
import Descricao from './Descricao'

class Form extends Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
        Nome: '',
        Email: '',
        Cpf: '',
        Endereco: '',
        Cidade: '',
        Estado:'',
        Casa:'',
        curriculo: '',
        Cargo: '',
        Descricao: '',
      }
  }
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
  render() {
    return (
      <div>
        <form>
            <fieldset>
                <Nome value={this.state.Nome.toUpperCase()} handleChange={this.handleChange} />
                <Email value={this.state.Email} handleChange={this.handleChange}/>
                <Cpf value={this.state.Cpf} handleChange={this.handleChange}/>
                <Endereco value={this.state.Endereco.replace(/[^\w\s]/gi, '')} handleChange={this.handleChange} />
                <Cidade value={this.state.Cidade} handleChange={this.handleChange} />
                <Estado value={this.state.Estado} handleChange={this.handleChange}/>
                <Casa value={this.state.Casa} handleChange={this.handleChange} />
            </fieldset>
            <fieldset>
                <Curriculo value={this.state.curriculo} handleChange={this.handleChange} />
                <Cargo value={this.state.Cargo} handleChange={this.handleChange} />
                <Descricao value={this.state.Descricao} handleChange={this.handleChange} />
            </fieldset>
            <button type='submit'>Enviar</button>
            <button type='reset'>Reset</button>
        </form>
      </div>
    );
  }
}

export default Form;