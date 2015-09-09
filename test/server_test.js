'use strict';

var chai = require('chai');
var fs = require('fs');
var expect = chai.expect;
var chaihttp = require('chai-http');
var server = require('../tcp_server');

chai.use(chaihttp);

describe('tcp server', function() {
  var logCount;
  var newlogCount;

  before(function(done) {
    logCount = fs.readdirSync(__dirname + '/../logs');
    done();
  //   chai.request('localhost:3000')
  //   .get('/test')
  //   .end(function(err, res) {
  //     done();
  //   })
  })
  it('should log the request', function(done) {
    chai.request('localhost:3000')
    .get('/test')
    .end(function(err, res) {
      done();
    })
    newlogCount = fs.readdirSync(__dirname + '/../logs');
    expect(newlogCount.length).to.be.greaterThan(logCount.length);
    done();
    //the request should increase the logCount by 1.
  })
})
