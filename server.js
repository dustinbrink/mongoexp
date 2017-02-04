//server.js

var config = require('./config.json');
var mongoose = require('mongoose');

const MONGO_URI = config.mongo.usr + ':' + config.mongo.pwd + '@' + config.mongo.uri;

console.log(MONGO_URI);

mongoose.connect(MONGO_URI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
})