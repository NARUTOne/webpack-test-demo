/**
 * 前端路由配置
 */

import React, {Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'

import App from './pages/app/'
import Todo from './pages/todo/'
import NotFound from './pages/notFound/'

export default class RouterList extends Component{
	render() {
		return (
			<Router
    history={browserHistory}
  >
    <Route path="/" component={App}>
      <IndexRoute component={Todo} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
		)
	}
}
