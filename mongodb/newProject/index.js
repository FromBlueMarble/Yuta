class SimpleMongoDB
    {

        constructor(DNSAddress, Port, Database, autoConnect = false)
            {
                this.isConnected = false;
                this.MongoClient = require('mongodb').MongoClient;
                this.url = "mongodb://" + DNSAddress + ":" + Port + "/" + Database

                if (autoConnect)
                    {
                    this.connect();
                    }
            }

        connect()
            {
            this.MongoClient.connect(this.url, this.onConnect)
            }

        disconnect(db)
            {
            db.close();
            }

        onConnect(err, db)
            {
                if (err) 
                    {
                    console.log(err)
                    throw err;
                    }
                this.db = db;
                this.isConnected = true;
            }
            
            testdatabase()
            {
                return this.isConnected
            }

    }
    

    var a = ("helo world");
    var b = new SimpleMongoDB("localhost", 27017, "ggghgh") 
    console.log(b.testdatabase)
    console.log(b.testdatabase())

    if (b.testdatabase()){
        console.log("I am conected")
    }