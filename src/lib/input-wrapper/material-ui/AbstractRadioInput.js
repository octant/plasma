import React from 'react'
import AbstractBase from '../AbstractBase'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

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
      <RadioButtonGroup name={this.props.name} onChange={this.handleChange} defaultSelected={this.props.defaultSelected}>
        {this.props.options.map((option, index) => {
          return <RadioButton key={index} value={option.value} label={option.text} />
        })}
      </RadioButtonGroup>
    )
  }
}

export default AbstractRadioInput
