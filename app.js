const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://mongo:mongo@cluster0-1psgj.mongodb.net/";
const DATABASE_NAME = "air_traffic";
var app = Express();


app.use(BodyParser.json());

app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;



app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("landings");
        collection2 = database.collection("passengers");

        console.log("Connected to `" + DATABASE_NAME + "`!");


/*
Methode de CRUD pour la collection landings
*/
    //CREATE
        /**POST*/
        app.post("/landings/create", (request, response) => {
            collection.insertOne(request.body, (error, result) => {
                if(error) {
                    return response.status(500).send(error);
                }
                response.send(result.result);
            });
        });


    //READ
        /**GET ALL*/
        app.get("/landings", (request, response) => {
            collection.find({}).toArray((error, result) => {
                if(error) {
                    return response.status(500).send(error);
                }
                response.send(result);
            });
        });
        /**GET:ID*/
        app.get("/landings/:id", (request, response) => {
            collection.findOne({"_id": new ObjectId(request.params.id) }, (error, result) => {
                if(error) {
                    return response.status(500).send(error);
                }
                response.send(result);
            });
        });
        /**GET:geo_region*/
        app.get("/landings/:geo_region/readByGeo_region", (request, response) => {
            collection.find({ "GEO Region": request.params.geo_region }).toArray((error, result) => {
                if(error) {
                    return response.status(500).send(error);
                }
                response.send(result);
            });
        });

    //UPDATE
    app.put("/landings/:id/update", (request, response) => {
        collection.updateOne({"_id": new ObjectId(request.params.id)},request.body ,{ upsert: true }, (error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result.result); 
        });
    });

    //DELETE
    app.delete("/landings/:id/delete", (request, response) => {
        collection.deleteOne({"_id": request.params.id}, (error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result.result);
        });
    });


/*
Methode de CRUD pour la collection passengers
*/

    //CREATE
        /**POST*/
        app.post("/passengers/create", (request, response) => {
            collection2.insertOne(request.body, (error, result) => {
                if(error) {
                    return response.status(500).send(error);
                }
                response.send(result.result);
            });
        });


    //READ
        /**GET ALL*/
        app.get("/passengers", (request, response) => {
            collection2.find({}).toArray((error, result) => {
                if(error) {
                    return response.status(500).send(error);
                }
                response.send(result);
            });
        });
        /**GET:ID*/
        app.get("/passengers/:id", (request, response) => {
            collection2.findOne({"_id": new ObjectId(request.params.id) }, (error, result) => {
                if(error) {
                    return response.status(500).send(error);
                }
                response.send(result);
            });
        });
        /**GET:geo_region*/
        app.get("/passengers/:geo_region/readByGeo_region", (request, response) => {
            collection2.find({ "GEO Region": request.params.geo_region }).toArray((error, result) => {
                if(error) {
                    return response.status(500).send(error);
                }
                response.send(result);
            });
        });

    //UPDATE
    app.put("/passengers/:id/update", (request, response) => {
        collection.updateOne({"_id": new ObjectId(request.params.id)},request.body ,{ upsert: true }, (error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result.result); 
        });
    });

    //DELETE
    app.delete("/passengers/:id/delete", (request, response) => {
        collection2.deleteOne({"_id": new ObjectId(request.params.id)}, (error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            response.send(result.result);
        });
    });

    });


    
});
