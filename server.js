var express = require ('express');
var app = express();

app.use(express.static('public'));

app.listen(2605, function(){
	console.log('I am watching port 2605');
});
