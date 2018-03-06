import React from 'react'
import PropTypes from 'prop-types'

class AbstractTextInput extends React.Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.props.changeMethod(event, {
      name: this.props.name,
      value: event.target.value
    })
  }

  render () {
    return <input name={this.props.name} type={this.props.type} value={this.props.value} onChange={this.handleChange} />
  }
}

AbstractTextInput.propTypes = {
  changeMethod: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number
  ])
}

export default AbstractTextInput
