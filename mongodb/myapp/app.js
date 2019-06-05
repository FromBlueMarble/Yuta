var express = require('express'),
    app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());
    
    //middleware
    // app.use(express.logger('dev'));
    // app.use(app.router); Error: 'app.router' is deprecated!
    //Most middleware (like logger) is no longer bundled with Express and must be installed separately
app.use(express.static(__dirname + '/public'));

    //To the name add "?" Becomes optional

    // app.get('/about', function(req, res) {
    //     res.send('about this page!');
    // });

    app.get('/new', function(req,res) {
        res.render('new');
    });
    app.post('/create', function(req,res) {
        res.send(req.body.name);
    });

    app.listen(3000);
    console.log("sever starting!");

//10.97.114.48
//127.0.0.1

// var express = require('express');
// var app = express();

// app.get('/', function(req,res) {
//     res.send('Hello World!');
// });

// app.listen(3000, function() {
//     console.log('Example app listening on port 3000!')
// });