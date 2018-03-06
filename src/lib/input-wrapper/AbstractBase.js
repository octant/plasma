import React from 'react'
import PropTypes from 'prop-types'
import 'core-js/fn/array/find'

class AbstractBase extends React.Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  toPass () {
    const props = {}
    const exclude = [
      'changeMethod',
      'type',
      'name',
      'value',
      'errorText',
      'options',
      'placeholder',
      'friendlyName'
    ]

    if (this.props.type !== 'radio') {
      exclude.push('defaultSelected')
    }

    Object.keys(this.props).forEach((prop) => {
      if ((exclude.find((key) => key === prop)) === undefined) {
        props[prop] = this.props[prop]
      }
    })

    return props
  }
}

AbstractBase.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  changeMethod: PropTypes.func,
  errorText: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number
  ])
}

export default AbstractBase
