import React, { Component } from 'react'

class TextoDeArea extends Component {
    render(){
        const {value, handleChange} = this.props
        let error = undefined
        if(value.length > 120) error = 'Texto Muito Grande'
        return (
            <div>
<textarea name="texto" value={value} onChange={handleChange} />
        <span>{error ? error : ''}</span>
            </div>
        )
    }
}

export default TextoDeArea