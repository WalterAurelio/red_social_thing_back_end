const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./routes/index');
const cors = require('cors');
const seedDatabase = require('./seeders/initialSeeder');

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET'],
  credentials: false
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'thingdb',
  });
  seedDatabase();
  console.log(`Aplicación corriendo en el puerto ${PORT}...`);
});
