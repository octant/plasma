import React, { Component } from 'react'

import Plasma from './Plasma'
import FormWrapper from './containers/FormWrapper'
import { schema } from './schema/cell-schema'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedRow: 0,
      selectedCol: 0,
      editing: false,
      rows: {
        0: {
          cols: {
            0: {
              field: 'coreOCAN'
            }
          }
        }
      }
    }

    this.handleAddRow = this.handleAddRow.bind(this)
    this.handleAddCol = this.handleAddCol.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.toggleEditing = this.toggleEditing.bind(this)
  }

  sortKeys (obj) {
    return Object.keys(obj).map((i) => { return parseInt(i, 10) }).sort((a, b) => a - b)
  }

  handleAddRow () {
    const rows = this.state.rows
    const keys = this.sortKeys(rows)
    const nextRowIndex = keys.pop() + 1

    rows[nextRowIndex] = {cols: {0: {index: 0}}}
    this.setState({
      rows
    })
  }

  handleAddCol (event) {
    const rows = this.state.rows
    const keys = this.sortKeys(rows[`${this.state.selectedRow}`].cols)
    const nextColIndex = keys.pop() + 1

    rows[`${this.state.selectedRow}`].cols[nextColIndex] = {}
    this.setState({rows})
  }

  handleClick (row, col) {
    if (this.state.editing) {
      this.setState({
        selectedCol: col,
        selectedRow: row
      })
    }
  }

  toggleEditing () {
    this.setState({
      editing: !this.state.editing
    })
  }

  render () {
    return (
      <div>
        <FormWrapper schema={schema} />
        <button onClick={this.toggleEditing}>Edit</button>
        <button disabled={!this.state.editing} onClick={this.handleAddRow}>+</button>
        <button disabled={!this.state.editing} onClick={this.handleAddCol}>+</button>
        <Plasma
          editing={this.state.editing}
          clickMethod={this.handleClick}
          rows={this.state.rows}
          selected={`${this.state.selectedRow}.${this.state.selectedCol}`}>
          <p>content</p>
        </Plasma>
      </div>
    )
  }
}

export default App
