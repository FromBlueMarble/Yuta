var express = require('express'),
    app = express();

    // app.use(app.router); Error: 'app.router' is deprecated!

    app.get('/users/steve', function(req, res) {
        
        //object
        res.send('hello world');
    });

    // app.get('/about', function(req, res) {
    //     res.send('about this page!');
    // });


    app.listen(3000);
    console.log("sever starting...");