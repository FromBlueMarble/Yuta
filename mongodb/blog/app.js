var express = require('express'),
    app = express(),
    post = require('./routes/post');
    ;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());    

    // app.use(express.logger('dev'));
    // app.use(app.router); Error: 'app.router' is deprecated!
    //Most middleware (like logger) is no longer bundled with Express and must be installed separately

    //To the name add "?" Becomes optional

    // app.get('/about', function(req, res) {
    //     res.send('about this page!');
    // });

    // routing
    app.get('/', post.index);

    // app.get('/posts/new', post.news);
    // app.post('/posts/create', post.create);
    // app.get('/posts/:id', post.show);
    // app.get('/posts/:id/edit', post.edit);
    // app.put('/posts/:id', post.update);
    // app.delete('/posts/:id/', post.destroy);


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