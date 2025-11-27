
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri) 
.then(() => console.log('MongoDB conectado!'))
.catch(err => console.error('Erro ao conectar no MongoDB:', err));

module.exports = mongoose;