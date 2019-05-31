    class Users 
    {
        constructor(fname,lname){
            this.firstName = fname;
            this.lastName = lname;
        }

    }
    var personA = new Users("Jhon", "Shara")
    var personB = new Users("Mike", "llll")

var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings');
MongoClient.connect("mongodb://"+settings.host+"/"+settings.db,function(err, db) {
    if(err) { return console.dir(err); }
    console.log("connected to db");
    console.log(db);


    var x = db.db("users")
    x.collection("customers").insertOne(personA, function(err, res){
        if (err) throw err;
        console.log("insertED" + personA)
    })
});