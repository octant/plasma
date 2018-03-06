import React, { Component } from 'react'

class Resize extends Component {
  constructor (props) {
    super(props)

    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    }

    this.handleResize = this.handleResize.bind(this)
  }

  handleResize (e) {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    })
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  render () {
    return (
      <span>{this.state.windowWidth} x {this.state.windowHeight}</span>
    )
  }
}

export default Resize
