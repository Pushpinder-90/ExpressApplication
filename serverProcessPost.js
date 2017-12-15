const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var server = app.listen(8081 , function(){
	var host = server.address().host;
	var port = server.address().port;
});

const urlEncodedParser = bodyParser.urlencoded({ extended:false});

app.get('/index.html', function(req, res){
	console.log("Inside root !!!"+req);
	res.sendFile(__dirname+"/"+"index.html");
});

app.post('/process_post', urlEncodedParser, function (req, res){
	// creating response in JSON form 
	response = {
		fname : req.body.first_name,
		lname : req.body.last_name
	};
	console.log("response :: "+response);
	res.end(JSON.stringify(response))
});


