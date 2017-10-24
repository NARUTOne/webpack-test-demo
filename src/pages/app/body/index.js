import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import './index.less'

class Body extends Component {

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    const { children } = this.props
    return (
      <div className="body">
        {children}
      </div>
    )
  }
}

export default Body