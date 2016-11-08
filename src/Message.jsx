import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("Message render");


    var newMessageHTML = (
      <div className="message">
          <span className="username"><b>{this.props.message.username || this.props.message.newname}</b></span>
          <span className="content">{this.props.message.content}</span>
      </div>
    )
    var newNotification = (
      <div className="message">
          <span className="username"><b>{this.props.message.oldname + " has changed his username to " + this.props.message.newname}</b></span>

      </div>
    )

      if(this.props.message.type == "postMessage"){
        return newMessageHTML
      } else {
      return newNotification
    }

  }
}
export default Message;