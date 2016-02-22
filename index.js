var express = require('express');
var path = require('path');

function toResponse(obj) {
  return JSON.stringify(obj);
}

var app = express();
app.use(express.static('.'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'index.html'))
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
