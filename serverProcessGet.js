const express = require('express');
var app = express();

var server = app.listen(8081 , function(){
	var host = server.address().host;
	var port = server.address().port;
});

app.use(express.static('public'));

app.get('/index.html', function(req, res){
	console.log("Inside root !!!"+req);
	res.sendFile(__dirname+"/"+"index.html");
});

app.get('/process_get', function(req,res){
	// creating response in JSON form 
	response = {
		fname : req.query.first_name,
		lname : req.query.last_name
	};
	console.log("response :: "+response);
	res.end(JSON.stringify(response))
});


