import React, {Component} from 'react';
import Chatbar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
constructor(props) {

    super(props);
    this.state = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
};
console.log(this.state.currentUser.name);
  }
  render() {
    console.log();
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
        <div id="message-list">
          <MessageList/>
          <Message />
        </div>
        <Chatbar currentUser={this.state.currentUser.name}/>
      </div>
    );
  }
}
export default App;