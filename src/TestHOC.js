import React, { Component } from 'react'
import {connect} from './containers/FormSchema'
import schema from './schema/ocan-schema'

class TestHOC extends Component {
  render () {
    return (
      <div>
        <button type='submit'>Save</button>
        <button type='reset'>Reset</button>
      </div>
    )
  }
}

const mapDispatchToProps = (context) => {
  return {
    mountMethod: (fields) => {
      console.log('mount handled')
    },
    changeMethod: ({name, type, value}) => {
      console.log('change handled')
    },
    submitMethod: (fields) => {
      console.log('submit handled')
    },
    resetMethod: (fields) => {
      console.log('reset handled')
    }
  }
}

const mapStateToProps = {
  schema
}

export default connect(mapStateToProps, mapDispatchToProps)(TestHOC)
