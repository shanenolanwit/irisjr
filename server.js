var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);


var io = require('socket.io')(http);
app.use(express.json());
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//curl -d '{"MyKey":"My Value","name":"shane"}' -H "Content-Type: application/json" http://127.0.0.1:3000/yo
app.post('/yo', function(req, res){
  io.emit('custom-event', "yoo to to you");
  console.log(req.body);
  console.log(req.body.name);
  res.status(200).send({ message: "thanks for that" });
});

app.use(express.static('public'));

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('custom-event', function(value){
    console.log("got this : " + value);
    io.emit('custom-event', value);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
