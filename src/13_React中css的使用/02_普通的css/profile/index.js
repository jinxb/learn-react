import React, { PureComponent } from 'react'

import './style.css'
export default class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">Profile标题</h2>
          <ul className="settings">
            <li>设置组件1</li>
            <li>设置组件2</li>
            <li>设置组件3</li>
          </ul>
      </div>
    )
  }
}
