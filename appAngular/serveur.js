const express = require('express');
const app = express();
let bodyParser = require("body-parser");
const cors = require('cors');
const dataUsers = require('./src/api/users.json');
const dataComs = require('./src/api/commentaires.json');


// Middlewareapp.use(express.json())
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
               "http://localhost:8081");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/users', (req, res) => {
  res.status(200).json(dataUsers)
});
app.get('/users/:id', (req,res) => {
 const id = parseInt(req.params.id)
 const user = users.find(user => user.id === id)
 res.status(200).json(user)
});
// app.get('/register', (req, res) => {
//   res.status(200).json(dataUsers)
// });

app.post('/register', (req,res) => {
  const user = {
    name: req.body.firstName,
    prenom: req.body.lastName,
    pseudo: req.body.pseudo
  };
  // console.log(user);
  // let pi = req.body;
  // console.log(pi);
  dataUsers.push(user);
  //res.send(JSON.stringify(req.body))
  res.status(200).json(dataUsers);
});


app.get('/commentaires', (req, res) => {
  res.json(dataComs)
});


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});


// Middlewareapp.use(express.json())
