import React from 'react'
import AbstractBase from '../AbstractBase'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class AbsctractSelectInput extends AbstractBase {
  handleChange (event, index, value) {
    this.props.changeMethod(event, {
      name: this.props.name,
      value: value,
      type: this.props.type
    })
  }

  render () {
    return (
      <SelectField{...this.toPass()}
        name={this.props.name}
        type={this.props.type}
        value={this.props.value}
        onChange={this.handleChange}
        hintText={this.props.placeholder}
        errorText={this.props.errorText} >
        {this.props.options.map((option, index) => {
          return <MenuItem key={index} value={option.value} primaryText={option.text} />
        })}
      </SelectField>
    )
  }
}

export default AbsctractSelectInput
