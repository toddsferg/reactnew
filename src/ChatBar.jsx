import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props){
    super(props)

    this.handleChangeUserName = this.handleChangeUserName.bind(this)
    this.handleNewMessage = this.handleNewMessage.bind(this)
  }

handleChangeUserName(event){
  if(event.key == 'Enter'){
    let newname = event.target.value;
    let currentUser = this.props.currentUser.name;
    this.props.changeName(currentUser, newname);
  }
}

handleNewMessage(event){
  if(event.key == 'Enter'){
    let user = this.refs['username-input-box'].value;
    let text = event.target.value;
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
          onKeyDown={this.handleChangeUserName}
           />

        <input
          id="new-message"
          type="text"
          placeholder="Type a message and hit ENTER"
          ref="message-input-box"
          onKeyDown={this.handleNewMessage}
           />

      </footer>
    );
  }
}

export default ChatBar;