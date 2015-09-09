'use strict';

var net = require('net');
var fs = require('fs');
var d = new Date();
var logTime = d.toTimeString();

var server = net.createServer(function(socket) {
  var reqData = '';
  var logName = rid(); //create unique id

  socket.on('data', function(data) { //fill buf with data
    reqData += data;
  });

  socket.on('end', function() {
    fs.writeFile(__dirname + '/logs/' + logTime, reqData); //write buf to log
    console.log('Request logged in: ' + logTime);
  });
});

server.listen(3000);
