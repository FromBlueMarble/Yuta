//The core module named fs is obtained through require, and its writeFile method is called.
const fs = require('fs');

//The arguments of writeFile are as follows. 1.file name 2. Character code(utf8) 3.Callback function

fs.writeFile('hello.txt', 'Hello from Node.js\n', function(err) {
    if(err) return console.log('Error: Do not write to file')
});


//P.5
fs.readFile('/test.txt', 'utf8', function(err, data) {

console.log(data);

})