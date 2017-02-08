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

var token = powerbi.PowerBIToken.createReportEmbedToken('ws-PBIE', 'aed61f50-0855-4f4e-939a-a219e088cc9d', '06a4c6ae-fffa-42c3-a2b7-c28080a3d496');

var jwtoken = token.generate('WSLT0xaqb5uJYDzDIcA5IgX2t+wUdHJBpfcfY2yMINv3lxgBFysAtvyT02cuiF3DW6CyqYisz0Vi5e7bVgDJ7g==');
console.log(jwtoken);

     res.render('index.html', {
            title: 'PowerBI Report',jwt:jwtoken
      });
      res.end();
});

app.listen(process.env.PORT || 3000);
