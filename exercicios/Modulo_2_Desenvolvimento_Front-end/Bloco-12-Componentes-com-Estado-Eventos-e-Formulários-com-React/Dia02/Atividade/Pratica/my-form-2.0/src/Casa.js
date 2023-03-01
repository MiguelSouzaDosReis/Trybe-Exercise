import React, { Component } from 'react'

class Cidade extends Component {
    render(){
        const {value, handleChange} = this.props
        return (
            <label>
                <input type='radio button' placeholder='Casa e Apartamento' onChange={handleChange} value={value} required name='Casa'  />
            </label>
        )
    }
}

export default Cidade