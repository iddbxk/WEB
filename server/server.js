const express = require('express');
const app = express();
var http = require('http');
var bodyParser = require('body-parser');
// var session = require('express-session');
// var MySQLStore = require('express-mysql-session')(session);


var indexRoute = require('./routes/index');


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(session({
//   secret: 'lashelkthwetwet',
//   resave: false,
//   saveUninitialized: true,
//   store: new MySQLStore({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'project'
//     })
// }));

app.use('/', indexRoute);

app.listen(4000,function(){
  console.log('Server Start.');
});
