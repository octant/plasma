import React, { Component } from 'react'

import Plasma from './Plasma'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedRow: 0,
      selectedCol: 0,
      editing: false,
      rows: [[{}]]
    }

    this.handleAddRow = this.handleAddRow.bind(this)
    this.handleAddCol = this.handleAddCol.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.toggleEditing = this.toggleEditing.bind(this)
  }

  handleAddRow () {
    const rows = this.state.rows
    rows.push([{}])
    this.setState({
      rows
    })
  }

  handleAddCol (event) {
    const rows = this.state.rows
    rows[this.state.selectedRow].push({})
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
        <button onClick={this.toggleEditing}>Edit</button>
        <button disabled={!this.state.editing} onClick={this.handleAddRow}>+</button>
        <button disabled={!this.state.editing} onClick={this.handleAddCol}>+</button>
        <div id='config'></div>
        <Plasma
          editing={this.state.editing}
          clickMethod={this.handleClick}
          rows={this.state.rows}
          selected={`${this.state.selectedRow}.${this.state.selectedCol}`} />
      </div>
    )
  }
}

export default App
