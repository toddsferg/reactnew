import React,  {Component} from 'react';
import Message from './Message.jsx';


class MessageList extends Component {
  render() {
    console.log("MessageList render");

    return (


      <div id="message-list">

      {this.props.messages.map((message, index) => {
            // console.log(message);
            // console.log(index);
          return <Message
            message = {message}
            key = {index}
            />
          })
        }
      </div>
    )
  }
}
export default MessageList;