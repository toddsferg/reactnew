import React,  {Component} from 'react';

class MessageList extends Component {
  render() {
    console.log("MessageList render");

    return (

        <div className="message">
          <span className="username"><b>Anonymous1</b></span>
          <span className="content">I won't be impressed with technology until I can download food.</span>
        </div>

    );
  }
}
export default MessageList;