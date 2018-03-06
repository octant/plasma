import React from 'react'
import AbstractBase from '../AbstractBase'

class AbsctractSelectInput extends AbstractBase {
  handleChange (event) {
    this.props.changeMethod(event, {
      name: this.props.name,
      value: event.target.value,
      type: this.props.type
    })
  }

  render () {
    return (
      <div>
        <span>{this.props.friendlyName}: </span>
        <select {...this.toPass()}
          name={this.props.name}
          type={this.props.type}
          value={this.props.value}
          onChange={this.handleChange} >
          {this.props.options.map((option, index) => {
            return <option key={index} value={option.value}>{option.text}</option>
          })}
        </select>
      </div>
    )
  }
}

export default AbsctractSelectInput
