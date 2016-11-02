import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("Message render");

    return (
      <div className="message">
          <span className="username"><b>{this.props.message.username}</b></span>
          <span className="content">{this.props.message.content}</span>
      </div>

    );
  }
}
export default Message;