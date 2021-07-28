import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    const {leftSolt,centerSolt,rightSolt} = this.props;
    return (
      <div className="nav-bar">
        <div className="nav-item nav-left">{leftSolt}</div>
        <div className="nav-item nav-center">{centerSolt}</div> 
        <div className="nav-item nav-right">{rightSolt}</div>
      </div>
    )
  }
}
