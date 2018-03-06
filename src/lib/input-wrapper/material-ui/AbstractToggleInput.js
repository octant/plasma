import React from 'react'
import AbstractBase from '../AbstractBase'
import Toggle from 'material-ui/Toggle'

class AbstractToggleInput extends AbstractBase {
  handleChange (event, value) {
    this.props.changeMethod(event, {
      name: this.props.name,
      value: value,
      type: this.props.type
    })
  }

  render () {
    return (
      <Toggle name={this.props.name} label={this.props.placeholder} toggled={this.props.value} onToggle={this.handleChange} />
    )
  }
}

export default AbstractToggleInput
