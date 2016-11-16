var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(2605, function(){
	console.log('I am watching port 2605');
});

var trueUsername = 'root' ;
var truePassword = 'admin' ;

app.post('/login', function(req, res){
	var login = req.body ;
	if(login.username === trueUsername && login.password === truePassword){
		res.send('You\'re successfully logged !');
	}
	else {
		res.send('Error, try again.');
	}

});

