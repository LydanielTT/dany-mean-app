const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
var MongoClient = require("mongodb").MongoClient;

const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */ /*première partie pour que ça marche*/
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
})

.get('/mongodb', (req, res) => {
  MongoClient.connect("mongodb://localhost:27017/tutoriel", function(error, db) {
    if (error) return funcCallback(error);
    console.log("Connecté à la base de données 'tutoriel'");
    db.collection('personnages').find({}).toArray(function(err, result) {
       if (err) throw err;
       res.setHeader('Content-Type', 'application/json');
       res.status(200).send(JSON.stringify(result));
    });
    
  });

});

module.exports = router;
