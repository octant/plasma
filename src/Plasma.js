import React, { Component } from 'react'

import { Grid, Row, Col } from 'react-flexbox-grid'

class Plasma extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (row, col) {
    return (event) => {
      this.props.clickMethod(row, col)
    }
  }

  editingRowStyle (row, color) {
    return (this.props.editing && this.props.selected.split('.')[0] === `${row}`) ? {border: `dashed ${color}`} : {border: 'none'}
  }

  editingColStyle (row, col, color) {
    return (this.props.editing && this.props.selected === `${row}.${col}`) ? {border: `dotted ${color}`} : {border: 'none'}
  }

  render () {
    return (
      <Grid>
        {Object.keys(this.props.rows).map((rowIndex) => {
          return <Row key={rowIndex} style={this.editingRowStyle(rowIndex, 'red')}>
            {Object.keys(this.props.rows[rowIndex].cols).map((colIndex) => {
              const colId = `${rowIndex}.${colIndex}`
              return <Col
                onClick={this.handleClick(rowIndex, colIndex)}
                id={colId}
                key={colIndex}
                xs
                style={this.editingColStyle(rowIndex, colIndex, 'blue')}>
                {this.props.children}
              </Col>
            })}
          </Row>
        })}
      </Grid>
    )
  }
}

export default Plasma
