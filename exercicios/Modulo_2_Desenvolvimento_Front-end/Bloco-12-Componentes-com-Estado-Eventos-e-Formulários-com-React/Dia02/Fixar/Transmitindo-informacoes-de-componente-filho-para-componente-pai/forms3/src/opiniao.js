import React, { Component } from 'react'

class Opcao extends Component {
    render(){
        const {value, handleChange} = this.props
        return (
            <div>
<select name='opcao' value={value} onChange={handleChange}>
        <option>1 opção </option>
        <option>2 opção</option>
</select>
            </div>
        )
    }
}

export default Opcao