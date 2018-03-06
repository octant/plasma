import React, { Component } from 'react'

import LayoutManager from '../components/LayoutManager'
import { layout } from '../layouts/cell'

class FormWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      preventReset: false,
      preventSubmit: false
    }

    this.handleMount = this.handleMount.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleMount (fields) {
    console.log('mount handled')
    // this.props.dispatch(setQueryParams({...fields}))
  }

  handleChange ({name, type, value}) {}

  handleSubmit (fields) {
    console.log(fields)
    // const dateFields = this.handleDateChange({...fields})

    // this.props.dispatch(setQueryParams({
    //   ...this.props.queryParams,
    //   ...fields,
    //   ...dateFields
    // }))
  }

  handleReset (fields) {
    console.log('reset handled')
    // this.props.dispatch(setQueryParams({
    //   ...fields,
    //   year: '',
    //   month: '',
    //   day: ''
    // }))
  }

  handleDateChange (fields) {
    console.log('date change handled')
    // const newFields = {}
    // if (fields.date) {
    //   const date = moment(fields.date, 'YYYY-MM-DD')
    //   newFields['year'] = date.year()
    //   newFields['month'] = date.month() + 1
    //   newFields['day'] = date.date()
    // } else {
    //   newFields['year'] = ''
    //   newFields['month'] = ''
    //   newFields['day'] = ''
    // }
    // return newFields
  }

  render () {
    return (
      <LayoutManager
        layout={layout}
        schema={this.props.schema}
        mountMethod={this.handleMount}
        submitMethod={this.handleSubmit}
        changeMethod={this.handleChange}
        resetMethod={this.handleReset}>

        <button type='submit'>Save</button>
        <button type='reset'>Reset</button>
      </LayoutManager>
    )
  }
}

export default FormWrapper
