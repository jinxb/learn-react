import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        App:{this.props.name}
      </div>
    )
  }
}

function enhanceComponent(WrappedComponent){
  class NewComponent extends PureComponent{
    render(){
      return <WrappedComponent {...this.props}/>
    }
  }

  NewComponent.displayName = "jinbin"
  return NewComponent
}

const EnhanceComponent = enhanceComponent(App);
export default EnhanceComponent