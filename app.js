/**
 * Module dependencies.
 */
var TWITTER_BOOTSTRAP_PATH = '/vendor/twitter/bootstrap/less';

var express = require('express');
var routes = require('./routes');
var less = require('less-middleware');

var app = express();

// Configuration

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  app.use(express.static(__dirname + '/public'));

  app.use(less({
    src: __dirname + "/public",
    paths: [__dirname + TWITTER_BOOTSTRAP_PATH]
  }));

  app.use(app.router);


});

app.configure('development', function() {
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.configure('production', function() {
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/public', {
    maxAge: oneYear
  }));
  app.use(express.errorHandler());
});



// Compatible

// Now less files with @import 'whatever.less' will work(https://github.com/senchalabs/connect/pull/174)

// Routes

app.get('/', routes.index);

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express app started on port ' + port);