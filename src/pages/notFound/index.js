import React from 'react'
import {Icon, Layout} from 'antd'
import './index.less'

const {Content} = Layout

const NotDev = (props) => {
  return (
    <Content className="not-dev">
      <h1>
      	<Icon type='meh-o'/>
      </h1>
      <p className='warn-color not-dev-info'>您访问的页面暂未开发，敬请期待&nbsp;<Icon type='smile-o'/></p>
    </Content>
  )
}

export default NotDev