var express = require('express'),
    app = express();

    // app.use(app.router); Error: 'app.router' is deprecated!

    //To the name add "?" Becomes optional

    // app.get('/about', function(req, res) {
    //     res.send('about this page!');
    // });
    app.get('/hello.txt', function(req, res) {
        res.sendfile(__dirname + '/public/hello.txt');
    });

    app.listen(3000);
    console.log("sever starting...");



// var express = require('express');
// var app = express();

// app.get('/', function(req,res) {
//     res.send('Hello World!');
// });

// app.listen(3000, function() {
//     console.log('Example app listening on port 3000!')
// });