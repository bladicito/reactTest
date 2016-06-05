var express = require('express');
var open = require('open');



var app = express(),
    port = 3000,
    server = app.listen(port)
;

app.use(express.static('./public'));


console.log('******************************************************');
console.log('claudio pizarro dev server started');
console.log('*******************************************************');
console.log('State: Running');
console.log('Port:  3000');
console.log('Server Type:  Express server');
console.log('*******************************************************');

open('http://localhost:' + port);