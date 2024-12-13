
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/ola_servidor', (req, res) => {
  res.json({ message: "Oi,como vai?" });
});

app.get('/que_horas_sao_por_favor', (req, res) => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('pt-BR');
  const formattedTime = now.toLocaleTimeString('pt-BR');

  res.json({ horaAtual: `${formattedDate} ${formattedTime} `});
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

