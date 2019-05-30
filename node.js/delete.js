var fs = require('fs');

//File delete function
function unlink(path) {
    fs.unlink(path, function (err) {
        if (err) {
            throw err;
        }    
    });
}

//
unlink("test.txt");