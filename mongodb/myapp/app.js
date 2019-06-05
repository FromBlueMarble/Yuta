var express = require('express'),
    app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
    //middleware
    // app.use(app.router); Error: 'app.router' is deprecated!
    //Most middleware (like logger) is no longer bundled with Express and must be installed separately
    // app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));

    //To the name add "?" Becomes optional

    // app.get('/about', function(req, res) {
    //     res.send('about this page!');
    // });
    app.get('/', function(req, res) {
        res.status('index', {title: 'title'});
    });

    app.listen(3000);
    console.log("sever starting!");



// var express = require('express');
// var app = express();

// app.get('/', function(req,res) {
//     res.send('Hello World!');
// });

// app.listen(3000, function() {
//     console.log('Example app listening on port 3000!')
// });