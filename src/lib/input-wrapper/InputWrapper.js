import React from 'react'
import PropTypes from 'prop-types'
import AbstractTextInput from './default/AbstractTextInput'
import AbstractSelectInput from './default/AbstractSelectInput'
import AbstractRadioInput from './default/AbstractRadioInput'

class InputWrapper extends React.Component {
  selectInputType (type) {
    switch (type) {
      case 'select':
        return <AbstractSelectInput {...this.props} />
      case 'radio':
        return <AbstractRadioInput {...this.props} />
      default:
        return <AbstractTextInput {...this.props} />
    }
  }

  render () {
    return this.selectInputType(this.props.type)
  }
}

InputWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  errorText: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number
  ])
}

export default InputWrapper
