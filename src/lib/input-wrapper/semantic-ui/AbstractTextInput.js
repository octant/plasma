import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react'

class AbstractTextInput extends React.Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, data) {
    this.props.changeMethod(event, data)
  }

  render () {
    return (
      <div>
        <Input {...this.props} name={this.props.name} type={this.props.type} value={this.props.value} onChange={this.handleChange} />
        <div className='ui basic red pointing prompt label transition visible'>{this.props.errorText}</div>
      </div>
    )
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
