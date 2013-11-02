var express = require('express'),
    wines = require('./routes/redditList');
 
var app = express();

app.get('/redditList', wines.redditList);

app.listen(3000);
console.log('Listening on port 3000...');