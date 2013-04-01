/**
 * Module dependencies.
 */

var express = require('express');




console.log("dir name", __dirname);

// setup middleware

var app = express();
//app.use(app.router);
app.use(express.static(__dirname + "/src/public"));

app.use(express.errorHandler());

// Optional since express defaults to CWD/views

app.set('views', __dirname + '/src/views');

// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express app started on port ' + port);