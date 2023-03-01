import React, { Component } from 'react'

class Cargo extends Component {
    render(){
        const {value, handleChange} = this.props
        return (
            <label>
                <textarea maxLength={40} name='Cargo' placeholder='Cargo'  onChange={handleChange} value={value} required onMouseEnter={() => {alert( 'Preencha com cuidado esta informação.')}}/>    
            </label>
        )
    }
}

export default Cargo