import React, { Component } from 'react'
import {Link} from 'react-router'
import Head from './header/'
import Body from './body/'
import Foot from './footer/'
import {Layout, Breadcrumb} from 'antd'
import './index.less'

class App extends Component {

  render() {
    const { children, routes, params, location } = this.props
    // console.log(routes)
    let main = [
      <Head key="header" location={location}/>,
      <Body key="body">
        <Breadcrumb routes={routes} params={params} separator=">" />
        {children}
      </Body>
    ]

    // 登录页和 404 页不渲染 Header
    if (routes[1]) {
      const path = routes[1].path
      if (path === 'login' || path === '*') {
        main = children
      }
    }

    return (
      <Layout className="wrapper">
        {main}
        <Foot />
      </Layout>
    )
  }
}

export default App
