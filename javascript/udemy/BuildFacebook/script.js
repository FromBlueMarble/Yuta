var database = [
    {
        username: "andreai",
        password: "supaersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "supersecret"
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "JavaScript is soooooo coole!"
    },
    {
        username: "Mitch",
        timeline: "JavaScript is soooooo coole!"
    }
];
function isUserValid(username,password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === usename && 
            database[i].password === password) {
                return true;
            } 
    }
    return false;
}

function signIn(usename, password) {


    // if (username === database[0].username &&
    //     password === database[0].password) {
    //     console.log(newsFeed);
    // } else {
    //     alert("Sorry, wrong username and password");
    // }
}
    var userNamePrompt = prompt("What\'s your username?");
    var userNamePrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);