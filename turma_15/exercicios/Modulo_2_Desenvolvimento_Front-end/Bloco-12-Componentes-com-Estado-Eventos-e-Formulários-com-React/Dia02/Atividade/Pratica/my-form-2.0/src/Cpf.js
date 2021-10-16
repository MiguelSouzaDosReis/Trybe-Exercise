import React, { Component } from 'react'

class Cpf extends Component {
    render(){
        const {value, handleChange} = this.props
        return (
            <label>
                <input placeholder='Cpf' onChange={handleChange} value={value} required maxLength={11} name='Cpf'  />
            </label>
        )
    }
}

export default Cpf