import React, { Component } from 'react'

export default class InputValue extends Component {

  handleInput = (event) => {
    if (event.which === 13) {
      console.log("i am here")
      this.props.onHandleInput(event.target.value)
    }

  }
  render() {
    const { description, typeInput, color, size, readOnly, value } = this.props
    return (
      <div style={{ width: `${size}%` }}>
        <label htmlFor={description}>{description}</label>
        {readOnly ?
          <input value={value} onKeyPress={this.handleInput} name={description} readOnly={readOnly} type={typeInput} style={{ fontWeight: "bold", color: `${color}` }} />
          :
          <input onKeyPress={this.handleInput} name={description} readOnly={readOnly} type={typeInput} style={{ fontWeight: "bold", color: `${color}` }} />

        }



      </div>
    )
  }
}
