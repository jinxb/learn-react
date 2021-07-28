import React, { Component } from 'react'

export default class NavBar extends Component {
  // 利用this.props.children 取下标
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-item nav-left">{this.props.children[0]}</div>
        <div className="nav-item nav-center">{this.props.children[1]}</div> 
        <div className="nav-item nav-right">{this.props.children[2]}</div>
      </div>
    )
  }
}
