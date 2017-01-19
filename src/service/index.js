var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var cors = require('./middleware/cors');
var postItCtr = require('./controllers/routes/application');
var postItSocket = require('./controllers/socket/application');
var socket = require('socket.io')(http);

/* Middleware */
app.use(bodyParser.json());

app.use(cors);

/* Routing */
app.get('/application/postits', postItCtr.getAll);
app.get('/application/postiits/:id', postItCtr.get);
app.delete('/application/postits/:id', postItCtr.remove);
app.put('/application/postits/:id', postItCtr.update);
app.post('/application/postits/', postItCtr.add);

/* Socket */
socket.on('connection', postItSocket);

http.listen(8081, function(){
  console.log('listening on *:8081');
});
