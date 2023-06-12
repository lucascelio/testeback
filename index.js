const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Rotas
app.post('/veiculos', (req, res) => {
  // Lógica para criar um novo veículo
});

app.get('/veiculos/:id', (req, res) => {
  // Lógica para ler os dados de um veículo específico
});

app.put('/veiculos/:id', (req, res) => {
  // Lógica para atualizar os dados de um veículo específico
});

app.delete('/veiculos/:id', (req, res) => {
  // Lógica para excluir um veículo específico
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
