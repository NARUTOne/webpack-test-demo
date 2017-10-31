import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link, browserHistory } from 'react-router'
import { Layout, Icon } from 'antd'
import auth from 'src/utils/auth'
import './index.less'

const { Header } = Layout;

class Head extends Component {

  handleLogout = e => {
    e.preventDefault()

    auth.destroy()
    browserHistory.push({
      pathname: '/login',
      state: {
        referrer: this.props.location.pathname
      }
    })
  }

  handleLogin = e => {
    auth.destroy()
    browserHistory.push({
      pathname: '/login',
      state: {
        referrer: this.props.location.pathname
      }
    })
  }

  render() {
    return (
      <Header className="header clear-float" >
        <div className='left' >
          <Link to="/" className="header__logo">
            SYSTEM PROJECT
          </Link>
        </div>
        <div className="header__nav left">
          {/*<ul>
            <li className='header-nav-list'>
              <Link to='/'>首页</Link> 
            </li>
          </ul>*/}
        </div>
        <div className="header__right right" >
         	{auth.user ? 
           <span>{auth.user.userName} &nbsp; <span className="ant-divider" /> &nbsp; <Icon type='logout' onClick={this.handleLogout}/></span>:
           <Icon type='login' onClick={this.handleLogin}/> }&nbsp; <span className="ant-divider" /> &nbsp;
           <a href='https://github.com/NARUTOne'><Icon type='github' /></a>
        </div>
      </Header>
    )
  }
}

Head.propTypes = {
  location: PropTypes.object.isRequired
}

export default Head