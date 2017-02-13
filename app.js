/**
 * Module dependencies.
 */

var express = require('express')
  , html = require('html')
  , http = require('http')
  , path = require('path');

var powerbi = require('powerbi-api');
var msrest = require('ms-rest');

//var credentials = new msrest.TokenCredentials('WSLT0xaqb5uJYDzDIcA5IgX2t+wUdHJBpfcfY2yMINv3lxgBFysAtvyT02cuiF3DW6CyqYisz0Vi5e7bVgDJ7g==', "AppKey");
//var client = new powerbi.PowerBIClient(credentials);

var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//index
app.get('/', function(req, res){

var token = powerbi.PowerBIToken.createReportEmbedToken('ws-PBIE', 'd04009df-c718-496b-b5c2-80ace4cf6c54', 'ce37eec6-1cfd-45fd-9323-1e505223c2fa');

var jwtoken = token.generate('CInQiGYqdUgZFLtWZelPzMAPo1LXG5UiLR3tdEUfBeTRqiWnE3JjIGqVrEUracQ6YHgI0T5vBh5u3nVKI4TAOw==');

console.log(jwtoken);

     res.render('index.html', {
            title: 'PowerBI with Docker',jwt:jwtoken
      });
      res.end();
});

app.listen(process.env.PORT || 3000);
