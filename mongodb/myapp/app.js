// var express = require('express'),
//     app = express();

//     // app.use(app.router); Error: 'app.router' is deprecated!

//     //To the name add "?" Becomes optional
//     app.get('/users/:name?', function(req, res) {
//         if(req.params.name) {
//             res.send('hello, ' + req.params.name);
//         }else {
//             res.send('hello, nobody!');
//         }
//     });
//     // app.get('/about', function(req, res) {
//     //     res.send('about this page!');
//     // });
//     app.get('/items/:id([0-9]+)', function(req, res) {
//         res.send('item no: ' + req.params.id);
//     });

//     app.listen(3000);
//     console.log("sever starting...");

var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});