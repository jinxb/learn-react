import React, { PureComponent } from 'react'


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  render() {
    return (
      <div>
        {
          <h2>我是标题</h2>
        }
      </div>
    )
  }
}
