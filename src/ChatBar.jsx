import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(event){
  if(event.key == 'Enter'){
    let text = this.refs['message-input-box'].value;
    let user = this.refs['username-input-box'].value;
    this.refs['message-input-box'].value = "";

    if(user.length === 0){
      user = "Anonymous"
    }

    if(text.length > 0){
      this.props.newMessage(user, text);
    }
  }

}



render() {
    console.log("ChatBar render");

    return (
      <footer>
        <input
          id="username"
          type="text"
          placeholder={this.props.currentUser.name}
          ref="username-input-box"
           />
        <input
          id="new-message"
          type="text"
          placeholder="Type a message and hit ENTER"
          ref="message-input-box"
          onKeyDown={this.handleSubmit}
           />
          }
      </footer>
    );
  }
}

export default ChatBar;