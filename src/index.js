// alert('hello world !');

import React from 'react'
import { render } from 'react-dom'
import RouterList from './router.js'

const hotRender = Component => render(<Component />, document.getElementById('app'))

hotRender(RouterList);

// dev-server
if(module.hot) {
  module.hot.accept('./router.js', () => {
    hotRender(RouterList);
  })
}