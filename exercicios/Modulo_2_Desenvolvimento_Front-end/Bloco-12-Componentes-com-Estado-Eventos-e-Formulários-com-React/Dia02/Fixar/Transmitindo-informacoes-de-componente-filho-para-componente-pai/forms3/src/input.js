import React, { Component } from 'react'

class input extends Component {
    render(){
        const {valor1, valor2, valor3, handleChange} = this.props
        return (
            <div>
   <input name='color' value={valor1} onChange={handleChange} type ='color'></input>
   <input name='data' value={valor2} onChange={handleChange} type= 'datetime-local'></input>
   <input name='checkbox' value={valor3} onChange={handleChange} type='checkbox'/>
            </div>
        )
    }
}

export default input