import React, {Component} from 'react';
import Chatbar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {

    super(props);
    this.sendNewMessage = this.sendNewMessage.bind(this);
    this.changeName = this.changeName.bind(this);
    this.state = {
      currentUser: {name: ""}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      userCount: 0
  };
}

  componentDidMount(){
    this.socket = new WebSocket("ws://localhost:4000");
    this.socket.onopen = (event) => {
      console.log("Connected to Server.");

  }

    // OBJECT COMING IN FROM SERVER AFTER INITIAL SEND - NEW DATA
  this.socket.onmessage = (event) => {
    const obj = JSON.parse(event.data);
    console.log("OBJ:" , obj);

  if(obj.type == "postMessage"){
    var post = this.state.messages.concat(obj);
    console.log("POST:" + post);
    this.setState({messages: post});
  } else if(obj.type =="postNotification"){
    var post = this.state.messages.concat(obj);
    this.setState({messages:post})
  } else if(obj.type == "userCount"){
    this.setState({userCount: obj.userOnline})
    }
    }
  }

  //Send message to the scoket server
  sendMessageToServer(messageObj){

    this.socket.send(JSON.stringify(messageObj));
    console.log(messageObj);
  }

  //pushes message object into sending to server
  sendNewMessage(name, content){

    let newMessage = {
      type:"postMessage",
      username: name,
      content: content
    };
      this.sendMessageToServer(newMessage);
  }

  changeName(oldname, newname){

    this.state.currentUser.name = newname;
    this.setState(this.state);

    let newMessage = {
    type: "postNotification",
    oldname: oldname,
    newname: newname

    }
    console.log("This is: newMessage" + newMessage);
    this.sendMessageToServer(newMessage);
  }

  render() {
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
          <h6>Users Online: {this.state.userCount}</h6>
        </nav>
        <div id="message-list">
          <MessageList messages={this.state.messages} />

        </div>
        <Chatbar currentUser={this.state.currentUser.name} newMessage={this.sendNewMessage} changeName={this.changeName}/>
      </div>
    );
  }
}


export default App;