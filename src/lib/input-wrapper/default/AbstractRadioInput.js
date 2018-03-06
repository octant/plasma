import React from 'react'
import AbstractBase from '../AbstractBase'

class AbstractRadioInput extends AbstractBase {
  handleChange (event, value) {
    this.props.changeMethod(event, {
      name: this.props.name,
      value: value,
      type: this.props.type
    })
  }

  render () {
    return (
      <div>
        <input type='radio' /> {this.props.value}
      </div>
    )
  }
}

export default AbstractRadioInput
