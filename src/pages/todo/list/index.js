import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'public/components/Icon'

import './index.less'

class List extends Component {

  change(type, value) {
    this.props.onChange(type, value)
  }

  render() {
    const { data } = this.props
    return (
      <ul className="todos__list">
        {data.map((item, i) => (
          <li key={i}>
            {item}
            <Icon stype="remove" onClick={() => {
              this.change('splice', index)
            }} />
          </li>
        ))}
      </ul>
    )
  }
}

List.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func.isRequired
}

export default List