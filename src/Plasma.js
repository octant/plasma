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
        {this.props.rows.map((row, rowIndex) => {
          return <Row key={rowIndex} style={this.editingRowStyle(rowIndex, 'red')}>
            {row.map((col, colIndex) => {
              const colId = `${rowIndex}.${colIndex}`
              return <Col
                onClick={this.handleClick(rowIndex, colIndex)}
                id={colId}
                key={colIndex}
                xs
                style={this.editingColStyle(rowIndex, colIndex, 'blue')}>
                <span style={{color: '#ccc'}}>Row: {rowIndex} Col: {colIndex}</span>
              </Col>
            })}
          </Row>
        })}
      </Grid>
    )
  }
}

export default Plasma
