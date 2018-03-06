import React from 'react'
import AbstractBase from '../AbstractBase'
import TextField from 'material-ui/TextField'

class AbstractTextInput extends AbstractBase {
  handleChange (event) {
    this.props.changeMethod(event, {
      name: this.props.name,
      value: event.target.value,
      type: this.props.type
    })
  }

  render () {
    return (
      <TextField
        {...this.toPass()}
        name={this.props.name}
        type={this.props.type}
        value={this.props.value}
        onChange={this.handleChange}
        hintText={this.props.placeholder}
        errorText={this.props.errorText} />
    )
  }
}

export default AbstractTextInput
