import React, { Component } from 'react'
import Header from './header/'
import Body from './body/'
import Footer from './footer/'

import './index.less'

class App extends Component {

  render() {
    const { children, routes } = this.props

    let main = [
      <Header key="header" />,
      <Body key="body">{children}</Body>
    ]

    // 登录页和 404 页不渲染 Header
    if (routes[1]) {
      const path = routes[1].path
      if (path === 'login' || path === '*') {
        main = children
      }
    }

    return (
      <div className="wrapper">
        {main}
        <Footer />
      </div>
    )
  }
}

export default App
