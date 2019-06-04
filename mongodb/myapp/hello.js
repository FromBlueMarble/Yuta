//HTTP module loading
var http = require("http");

//Make HTTP server, do request at port 8000
http.createServer(function(request, response) {

    //Set the response HTTP header with HTTP statud and Content type
    response.writeHead(200, {'Content-type': 'text/plain'});

    //response body send "helli world"
    response.end('Hello World');
}).listen(8000);

//output URL for accessing server
console.log('Server running at http://127.0.0.1:8000/');