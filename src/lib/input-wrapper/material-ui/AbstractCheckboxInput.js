import React from 'react'
import AbstractBase from '../AbstractBase'
import Checkbox from 'material-ui/Checkbox'

class AbstractCheckboxInput extends AbstractBase {
  handleChange (event, value) {
    this.props.changeMethod(event, {
      name: this.props.name,
      value: value,
      type: this.props.type
    })
  }

  render () {
    return (
      <Checkbox name={this.props.name} label={this.props.placeholder} checked={this.props.value} onCheck={this.handleChange} />
    )
  }
}

export default AbstractCheckboxInput
