var assert = require('assert');   

class MongoDBActor {
    constructor() {
        console.log("Creating MongoDB Actor")
        this.MongoClient = require('mongodb').MongoClient;
        assert = require('assert');   
        }

    initialize(selfActor) {
        this.selfActor = selfActor;
        }

    connectToServer(URL, dbname) {
        console.log('Connecting to Mongo DB:' + URL + " and to database " + dbname)
        this.client = new this.MongoClient('mongodb://' + URL + '/' + dbname)
      
        // Use connect method to connect to the Server
        this.client.connect(function (err)
                                {
                                assert.equal(null, err);
                                console.log("Connected successfully to server");           
                                this.db = this.client.db(dbName);                               
        })
    }

    insertDocument(db) {
        // Get the documents collection
        this.collection = this.db.collection('documents');
        console.log(collection)
        // Insert some documents
        this.collection.insertMany([
            { a: 1 }, { a: 2 }, { a: 3 }
        ], function (err, result) {
            console.log(result)
            assert.equal(err, null);
            assert.equal(3, result.result.n);
            assert.equal(3, result.ops.length);
            console.log("Inserted 3 documents into the collection");
            //callback(result);
        });
    }

    disconnectFromServer() {
        this.client.close
    }

    destroy() {
        this.disconnectFromServer();
        console.log("Destroying MongoDB Actor")
    }
}

module.exports = MongoDBActor