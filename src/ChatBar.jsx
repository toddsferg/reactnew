import React, {Component} from 'react';

class ChatBar extends Component {
  componentDidMount(){
    console.log("Display componentDidMount")
  }
  render() {
    console.log("ChatBar render");
    console.log("chatbat" + this.props.currentUser)
    return (
      <footer>
        <input id="username" type="text" placeholder={this.props.currentUser} />
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default ChatBar;