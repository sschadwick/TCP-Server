'use strict';

var net = require('net');
var fs = require('fs');
var rid = require('readable-id'); //creates a unique identifier

var server = net.createServer(function(socket) {
  var reqData = '';
  var logName = rid(); //create unique id

  socket.on('data', function(data) { //fill buf with data
    reqData += data;
  });

  socket.on('end', function() {
    fs.writeFile(__dirname + '/logs/' + logName, reqData); //write buf to log
    console.log('Request logged in: ' + logName);
  });
});

server.listen(3000);
