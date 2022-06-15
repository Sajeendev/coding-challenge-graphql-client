const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const itinerariesData = require('./data/itineraries.json');
const locations = require('./data/locations.json');
const port = 8000;

app.use(cors());
app.use(morgan('tiny'));

app.get('/itineraries', (req, res) => res.send(itinerariesData));
app.get('/locations', (req, res) => res.send(locations));

app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
