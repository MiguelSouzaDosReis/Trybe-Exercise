import React, { Component } from 'react'

class Email extends Component {
    render(){
        const {value, handleChange} = this.props
        return (
            <label>
                <input placeholder='email' onChange={handleChange} value={value} required maxLength={50} type='email' name='Email'  />
            </label>
        )
    }
}

export default Email