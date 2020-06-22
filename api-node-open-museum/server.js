const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Connexion avec la base de données :
mongoose.connect(
    "mongodb+srv://user2:azerty@cluster0-og7mc.mongodb.net/openmuseumdb?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
); //Création d'une connexion avec la BDD MongoDB
const db = mongoose.connection; //Récupération dans une variable d'un objet correspondant à la connection
db.on("error", console.error.bind(console, "connection error:")); //Affichage en console d'un message d'erreur si la connection a échoué
db.once("open", function () {
    console.log("API Connected to database"); //Affichage en console d'un message de succès si la connection a réussi
});

const corsOptions = {
    origin: "*"
};
const app = express(); //Initialisation du module Express.js

app.use(cors(corsOptions));
app.listen(3000); //On lance l'écoute de l'API sur le port 3000

//Récupération de la classe Schema de mongoose
const Schema = mongoose.Schema;

// Création du schéma correspondant aux documents contenus dans la collection "players”
const MuseumSchema = new Schema({
    opening: String,
    name: String,
    night_time: String,
    city: String,
    fax: String,
    coordinates: [Number],
    website: String,
    telephone: String,
    annual_closure: String,
    address: String,
    cp: String
});

// Création du modèle permettant de communiquer avec la collection "players"
const Museum = mongoose.model("museums", MuseumSchema);

app.get("/museums", function (req, res) {
    Museum.find({}, 'name city', function (err, documents) {
        //On retourne une erreur s’il y a eu un problème lors de l’opération
        if (err) {
            res.statusMessage = "Error with database during request";
            return res.status(500).end(); //En cas d'erreur lors de requête sur la BDD, on répond avec une erreur 500
        }

        //On retourne les documents correspondants à la requête en BDD
        return res.send(documents);
    });
});

app.get('/museums/:id', function (req, res) {
    let id = req.params.id;

    Museum.findById(id, function (err, documents) {

        if (!documents) {
            res.statusMessage = "Museum not found";
            return res.status(404).end();
        }

        //On retourne une erreur s’il y a eu un problème lors de l’opération
        if (err) {
            res.statusMessage = "Error with database during request";
            return res.status(500).end(); //En cas d'erreur lors de requête sur la BDD, on répond avec une erreur 500
        }

        //On retourne les documents correspondants à la requête en BDD
        return res.send(documents);
    });
});