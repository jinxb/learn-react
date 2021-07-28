import React, { PureComponent } from 'react'

import moment from 'moment';

import {Input,Button} from 'antd';

export default class CommentInput extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      content:"" 
    }
  }
  render() {
    const {TextArea} = Input; 
    return (
      <div>
        <TextArea rows={4} 
                  cols="30"
                  value={this.state.content}
                  onChange={e=>this.handelChange(e)} 

        />
        <Button type="primary" onClick={e=>this.addComment()}>添加评论</Button>
      </div>
    )
  }


  handelChange(event){
    this.setState({
      content: event.target.value
    })
  }

  addComment(){
    const commentInfo = {
      id:moment().valueOf(),
      avatar:"https://cdn.jsdelivr.net/gh/jinxb/jinxb.github.io/images/hp.jpeg",
      nickname:"jinxb",
      datetime:moment(),
      content: this.state.content
    }
    this.props.submitComment(commentInfo);
    this.setState({
      content:""
    })
  }

}
 