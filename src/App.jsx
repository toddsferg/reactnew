import React, {Component} from 'react';
import Chatbar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
constructor(props) {
    super(props);
    this.pushNewMessage = this.pushNewMessage.bind(this);
    this.state = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: []

};

}
 pushNewMessage(name, content){

    const newMessage = {username: name, content: content};
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
  }

  render() {
    console.log();
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
        <div id="message-list">
          <MessageList messages={this.state.messages}/>

        </div>
        <Chatbar currentUser={this.state.currentUser.name} newMessage={this.pushNewMessage}/>
      </div>
    );
  }
}


export default App;