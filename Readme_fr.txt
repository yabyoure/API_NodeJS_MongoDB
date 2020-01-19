**********************************************************************************
********************************* API NodeJS MongoDB **********************************
**********************************************************************************

Informations
-------------------------------------------------------------------------------

Dans ce projet, nous realisons une API en nodeJS pour une base de donnée mongodb atlas.
Le service web est realisé grace au framework express.
Les données ont été techargées sur kaggle 
(https://www.kaggle.com/san-francisco/sf-air-traffic-passenger-and-landings-statistics)
et importées sur mongoDB Atlas.

Les fonctionnalités implementées sont les methodes de CRUD.


Exécution
-------------------------------------------------------------------------------

Importer le projet dans l'environnement de Visual Studio Code dans le terminal, lancer 
l'application avec la commande : npm start

Methode de CRUD pour la collection landings à tester avec Postman
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

Projet réalisé dans le cadre du cours Base de donnée NoSQL, ESMT/ISI
Dakar 2020

KABORE Yabyouré Eric
email: yabyourekabore@gmail.com
