import React from 'react'
import AbstractBase from '../AbstractBase'
import DatePicker from 'material-ui/DatePicker'

class AbstractDateInput extends AbstractBase {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (event, date) {
    this.props.changeMethod(event, {
      name: this.props.name,
      value: date.toISOString().substr(0, 10),
      type: this.props.type
    })
  }

  handleClick (event) {
    if (this.props.value !== '') {
      this.props.changeMethod(event, {
        name: this.props.name,
        value: '',
        type: this.props.type
      })
    }
  }

  toDate (dateString) {
    if (dateString === '' || dateString === undefined) {
      return {}
    } else {
      const date = new Date(dateString)
      return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
    }
  }

  render () {
    return (
      <DatePicker
        {...this.toPass()}
        name={this.props.name}
        value={this.toDate(this.props.value)}
        onChange={this.handleChange}
        hintText={this.props.placeholder}
        onClick={this.handleClick}
        errorText={this.props.errorText} />
    )
  }
}

export default AbstractDateInput
