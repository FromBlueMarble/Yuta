//create & rename

var fs = require('fs');

//File write function
function writeFile(path,data) {
    fs.writeFile(path,data, function (err) {
        if (err) {
            throw err;
        }
    });
}

//
writeFile("test.txt", "test OK!");