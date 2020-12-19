const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');
const { response } = require('express');

const app = express();
app.use(cors());

const port = 3000;

let tableauLacs = [
  {
    id: uuidv4(),
    titre: "Lac test",
    superficie: "40Ha",
    typeLac:"Lac artificiel",
    pecheAutorisee: false,
    navigationAutorisee: false,
    entreePayante: false
  },
  {
    id: uuidv4(),
    titre: "Un autre lac",
    superficie: "3044234 Ha",
    typeLac:"Lac naturel",
    pecheAutorisee: true,
    navigationAutorisee: true,
    entreePayante: false
  }
];

app.get('/lacs', (requete, reponse) => {
  reponse.json(tableauLacs);
});

app.delete('/lacs/:identifiant', (requete, response) => {

  let indice = tableauLacs.findIndex(lac => lac.id === requete.params.identifiant);

  if (indice != -1) {
    tableauLacs.splice(indice, 1);
    response.send();
  } else {
    response.send(400);
  }
});

app.listen(port, () => {
  console.log(`Backend démarré et accessible depuis http://localhost:${port}`)
});