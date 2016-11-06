

const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 4000
const PORT = 4000;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server: server });


//creates broadcast, called in callback in ws.on
wss.broadcast = function broadcast(data){
  wss.clients.forEach(function each(client){
  client.send(data);
  console.log("DATA:" + data); //Whole object sent back
  })
};

  let userOnline = 0;
  let messageID = 1;

wss.on('connection', (ws) => {
  console.log('Client connected');
  userOnline += 1;

wss.broadcast(JSON.stringify({
  type: 'userCount',
  userOnline: userOnline
}));

   //incoming data from App.js
  ws.on('message', function incoming(data){
    let response = {};
    let messageObject = JSON.parse(data);
    console.log("wahtHHHHHHHHH: " + messageObject);

    const id = messageID++;
    messageObject.id = id;

    if(messageObject.type == "postMessage"){


      //this line broadcasts object back to connected clients(calls wss.broadcast)
      wss.broadcast(JSON.stringify(messageObject));
    }else if (messageObject.type == "postNotification"){
      wss.broadcast(JSON.stringify(messageObject));
    }






  });
  ws.on('close', function(){
    userOnline -= 1;
    wss.broadcast(JSON.stringify({
      type: 'userCount',
      userOnline: userOnline
    }))
  })


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));

});