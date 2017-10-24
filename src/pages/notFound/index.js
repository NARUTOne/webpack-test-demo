import React from 'react'
import Icon from 'public/components/Icon'
import './index.less'

const NotDev = (props) => {
  return (
    <div className="not-dev">
      <h1>
      	<Icon type='meh-o'/>
      </h1>
      <p className='warn-color not-dev-info'>您访问的页面暂未开发，敬请期待&nbsp;<Icon type='smile-o'/></p>
    </div>
  )
}

export default NotDev