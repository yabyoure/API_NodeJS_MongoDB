**********************************************************************************
********************************* API NodeJS MongoDB **********************************
**********************************************************************************

Informations
-------------------------------------------------------------------------------
In this project, we are building an API in nodeJS for a mongodb atlas database.
The web service is realized with the express framework.
The data was downloaded from kaggle 
(https://www.kaggle.com/san-francisco/sf-air-traffic-passenger-and-landings-statistics)
and imported to mongoDB Atlas.

The functionalities implemented are the CRUD methods.

Running
-------------------------------------------------------------------------------

Import the project into Visual Studio Code environment in the terminal, launch the 
application with the command: npm start

CRUD methods for the landings collection to be tested with Postman

    CREATE (POST)
        http://localhost:5000/landings/create

    READ GET (all)
        http://localhost:5000/landings
         
	GET (:id)
        http://localhost:5000/landings/:id

        GET (:geo_region)
        http://localhost:5000/landings/:geo_region/readByGeo_region
    
    UPDATE (:id)
    	http://localhost:5000/landings/:id/update

    DELETE
    	http://localhost:5000/landings/:id/delete


Methode de CRUD pour la collection passengers

    CREATE (POST)
        http://localhost:5000/passengers/create

    READ
        GET (all))
        http://localhost:5000/passengers

        GET (:id)
        http://localhost:5000/passengers/id/:id

        GET (:geo_region)
        http://localhost:5000/passengers/:geo_region/readByGeo_region

    UPDATE PUT (:id)
    	http://localhost:5000/passengers/:id/update

    DELETE (:id)
    	http://localhost:5000/passengers/:id/delete


Project carried out as part of the NoSQL Database course, ESMT / ISI
Dakar 2020

KABORE Yabyouré Eric
email: yabyourekabore@gmail.com
