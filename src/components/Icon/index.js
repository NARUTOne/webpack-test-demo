import 'font-awesome/less/font-awesome.less'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './index.less'

const Icon = props => {
  const { className, type, ...other } = props
  return (
    <i className={classnames('xj-icon fa', 'fa-' + type, className)} {...other}></i>
  )
}

Icon.propTypes = {
  // 图标类型，http://fontawesome.io/icons/
  type: PropTypes.string.isRequired
}

export default Icon