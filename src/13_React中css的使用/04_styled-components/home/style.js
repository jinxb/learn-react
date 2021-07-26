import styled from 'styled-components';

const HomeWrapper = styled.div`
font-size:50px;
color:red;
.banner{
  background-color: #f0f;
  span{
    color: #fff;
    &.active{
      color: red;
    }
    :hover{
      color: ${props=>props.theme.themeColor};
    }
    ::after{
      content: "伪元素";
    }
  }
}
`

export {
  HomeWrapper
};