import React, { Component } from 'react'

import PropTypes from 'prop-types'

function ChildCpn(props) {
  const { name, age, height } = props;
  const { names } = props;
  return (
    <div>
      <ul>
        {
          names.map((item, index) => {
            return <li>{item}</li>
          })
        }
      </ul>
      <h2>子组件展示数据：{name + " " + age + " " + height}</h2>
    </div>
  )
}
//写法一、class fields写法
// class Children2 extends Component {
//   //es6中 class fields写法
//   static propTypes = {}
//   static defaultProps = {}
// }
//写法二、
//类型验证  import PropTypes from 'prop-types'
ChildCpn.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array
}
//设置默认值
ChildCpn.defaultProps = {
  name: "jinbin",
  age: 30,
  height: 1.98,
  names: ["aaa", "bbb"]
}
export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="jin" age={18} height={1.81} names={["abc", "cba", "nba"]} />
        <ChildCpn name="jay" age={18} height={1.77} names={["adc", "mba", "abc"]} />
      </div>
    )
  }
}
