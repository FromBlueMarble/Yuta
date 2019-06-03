// Ivan
//     class Users 
//     {
//         constructor(fname,lname){
//             this.firstName = fname;
//             this.lastName = lname;
//         }

//     }
//     var personA = new Users("Jhon", "Shara")
//     var personB = new Users("Mike", "llll")


// function startupMongo()
//             {

                var MongoClient = require('mongodb').MongoClient;
                var settings = require('./settings');
                MongoClient.connect("mongodb://"+settings.host+"/"+settings.db,function(err, db) {
                    if(err) { return console.dir(err); }
                    console.log("connected to db");
                    console.log(db);
                    db.collection("users", function(err, collection){
                        var docs = [
                            {name:  "taguchi", score: 40},
                            {name:  "fkoji", score: 80},
                            {name:  "dotinstall", score: 60},
                        ];

                        // collection.find({name: "taguchi"}).toArray(function(err, items) {
                        //     console.log(items);
                        // });


                        //stream is when you use to big data
                        var stream = collection.find().stream();
                        stream.on("data", function(item) {
                            console.log(item);
                        });
                        stream.on("end", function() {
                            console.log("finished.")
                        });
                    });
                });

            //         var x = db.db("users")
            //         insertSomeTestData(x, PersonA)
            //         insertSomeTestData(x, PersonB)

            //         });
            // }

// Ivan
// function insertSomeTestData(x, data)
//     {
//         x.collection("customers").insertOne(personA, function(err, res){
//             if (err) throw err;
//             console.log("insertED" + personA)
//         })
//     }



// startupMongo();
