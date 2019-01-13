const express = require('express');
const path = require('path');
var apiai = require('apiai');
var bodyParser = require("body-parser");
var app2 = apiai("ac2a4fbe907349c6ac9ba3ee1f27dfc0");
var favicon = require('serve-favicon');

//Important Build a weather website in 30minutes with node.js + express + open weather
/*msg2='What internships do you offer?';
var request = app2.textRequest(msg2, {
    sessionId: 'lases'
});*/


const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'ejs');
//app.use(favicon(__dirname + '/public/images/israelisocietylogo.ico'));
//console.log(__dirname + '/public/images/israelisocietylogo.ico');
app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res) {
  res.render('../views/index.ejs');
});



server=app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const io = require("socket.io")(server);

function responsex(msg){
	io.sockets.emit('new_message_company', {message : msg});
	console.log('responsex executed');
	console.log(msg);
};



//listen on every connection
io.on('connection', (socket) => {
  io.sockets.emit('new_message_company', {message : 'Hi, we are the Imperial College Israeli Society. How may we help?'});
	console.log('Connection established')
    socket.on('new_message', (data) => {
        //broadcast the new message
        console.log('New message');
				io.sockets.emit('new_message_customer', {message : data.message});
				var request = app2.textRequest(data.message, {
				    sessionId: 'lases'
				});
				request.on('response', function(response) {
				      responseParsed=response.result.fulfillment.speech;
				      console.log(responseParsed);
				      responsex(responseParsed);
				  });
				  request.on('error', function(error) {
				      console.log(error);
				});

				request.end();
    })
});
