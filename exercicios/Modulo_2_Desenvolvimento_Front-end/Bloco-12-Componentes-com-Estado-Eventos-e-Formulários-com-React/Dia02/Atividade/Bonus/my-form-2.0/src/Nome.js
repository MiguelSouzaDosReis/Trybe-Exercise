import React, { Component } from 'react'

class Nome extends Component {
    render(){
        const {value, handleChange} = this.props
        return (
            <label>
                <input maxLength={40} type='text' name='Nome' onChange={handleChange} value={value} required placeholder='nome'/>
            </label>
        )
    }
}

export default Nome