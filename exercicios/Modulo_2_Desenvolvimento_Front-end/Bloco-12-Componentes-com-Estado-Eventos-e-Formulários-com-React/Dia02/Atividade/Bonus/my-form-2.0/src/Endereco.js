import React, { Component } from 'react'

class Endereco extends Component {
    render(){
        const {value, handleChange} = this.props
        return (
            <label>
                <input placeholder='Endereço' onChange={handleChange} value={value} required maxLength={200} name='Endereco'  />
            </label>
        )
    }
}

export default Endereco