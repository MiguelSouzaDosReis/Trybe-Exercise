import React, { Component } from 'react'

class Descricao extends Component {
    render(){
        const {value, handleChange} = this.props
        return (
            <label>
                <textarea maxLength={500} name='Descricao' placeholder='Descrição'  onChange={handleChange} value={value} required/>    
            </label>
        )
    }
}

export default Descricao