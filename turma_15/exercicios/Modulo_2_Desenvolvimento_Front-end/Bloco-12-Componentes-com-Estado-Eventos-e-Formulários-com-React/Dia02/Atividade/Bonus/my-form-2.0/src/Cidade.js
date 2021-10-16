import React, { Component } from 'react'

class Cidade extends Component {
    render(){
        const {value, handleChange} = this.props
        return (
            <label>
                <input onBlur={handleChange} placeholder='Cidade' onChange={handleChange} value={value} required maxLength={28} name='Cidade'  />
            </label>
        )
    }
}

export default Cidade