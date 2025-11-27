const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('./src/database');

app.use(express.json());

const { Schema } = require('mongoose');

const ReportSchema = new Schema({
  titulo: String,
  descricao: String,
  local: String,
  foto: String, // URL ou base64
  dataHora: Date,
  laboratorio: String
});

const Report = mongoose.model('Report', ReportSchema);

// Rota para criar
app.post('/reports', async (req, res) => {
  try {
    const r = await Report.create(req.body);
    res.status(201).json(r);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Rota para listar
app.get('/reports', async (req, res) => {
  const lista = await Report.find().sort({ dataHora: -1 });
  res.json(lista);
});

const port = process.env.PORT || 3333;
app.listen(port, () =>
  console.log(`Backend rodando em http://localhost:${port}`)
);
