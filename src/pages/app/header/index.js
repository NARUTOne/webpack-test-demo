import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link, browserHistory } from 'react-router'

import Icon from 'public/components/Icon'
import './index.less'

class Header extends Component {

  render() {
    return (
      <div className="header clear-float" >
        <div className='left' >
          <Link to="/" className="header__logo">
            SYSTEM NAME
          </Link>
        </div>
        <div className="header__right right" >
         	<a href="https://github.com/NARUTOne" target='_blank'><Icon type='github' /></a>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  
}

export default Header