import React, { Component } from 'react'
import List from './List'
import './index.less'

class Todos extends Component {

  constructor() {
    super()
    this.update = update.bind(this)
    this.state = {
      text: '',
      list: []
    }
  }

  handleListChange(type, index) {
    const {list} = this.state

    list.splice(index, 1)

    this.setState({list})
  }

  handleAdd() {
    const {list, text} = this.state
    
    list.push(text)

    this.setState({list})
  }

  render() {
    const { update, state } = this
    const { text, list } = state
    return (
      <div className="todos">
        <input onChange={e => this.setState({'text': e.target.value})}></input>
        <button onClick={() => {this.handleAdd()}}>添加</button>
        <List data={list} onChange={() => {this.handleListChange()}} />
      </div>
    )
  }
}

export default Todos