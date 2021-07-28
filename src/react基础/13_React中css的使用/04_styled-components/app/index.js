import React, { PureComponent } from 'react'
import styled,{ThemeProvider} from 'styled-components';
import Home from '../home';
import Profile from '../profile';


const HYbutton = styled.button`
    padding: 10px 20px;
    color: hotpink;
`

const HYprimaryBtn = styled(HYbutton)`
    font-size:20px;
    background-color: green;
`

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{themeColor:"yellow",fontSize:"30px"}}>
        <Home/>
        <Profile/>
        <HYbutton>普通按钮</HYbutton>
        <HYprimaryBtn>primary按钮</HYprimaryBtn>
      </ThemeProvider>
    )
  }
}
