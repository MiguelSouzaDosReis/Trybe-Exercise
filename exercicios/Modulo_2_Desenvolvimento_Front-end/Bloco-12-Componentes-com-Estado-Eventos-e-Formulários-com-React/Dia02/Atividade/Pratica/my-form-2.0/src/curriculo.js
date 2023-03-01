import React, { Component } from 'react'

class curriculo extends Component {
    render(){
        const {value, handleChange} = this.props
        return (
            <label>
                <textarea maxLength={100} name='curriculo' placeholder='curriculo'  onChange={handleChange} value={value} required/>    
            </label>
        )
    }
}

export default curriculo