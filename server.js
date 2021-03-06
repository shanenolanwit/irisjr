var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var dateFormat = require('dateformat');


var io = require('socket.io')(http);
app.use(express.json());
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.post('/aws', function (req, res) {

  console.log(req.body);
  var custTime = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
  var data = {
    time: custTime,
    ip: req.body.ip,
    osName: req.body.osName,
    uptime: req.body.uptime,
    cpuSpeedGHZ: req.body.cpuSpeedGHZ,
    memTotal: req.body.memTotal,
    memFree: req.body.memFree,
    memUsed: req.body.memUsed,
    cpuCurrentLoad: req.body.cpuCurrentLoad
  }
  
  io.emit('aws-event', data);
  res.status(200).send(req.body);
});

app.use(express.static('public'));

io.on('connection', function (socket) {
  console.log('a user connected');

  socket.on('custom-event', function (value) {
    console.log("got this : " + value);
  });

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});

app.use('/js/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/js/d3', express.static(__dirname + '/node_modules/d3/dist/'));
app.use('/js/billboard', express.static(__dirname + '/node_modules/billboard.js/dist/'));
app.use('/css/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/css/billboard', express.static(__dirname + '/node_modules/billboard.js/dist/'));
app.use('/images', express.static(__dirname + '/public/images/'));
