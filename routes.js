import express from 'express';

const router = express.Router();

router.post('/veiculos', (req, res) => {
  // Lógica para criar um novo veículo
});

router.get('/veiculos/:id', (req, res) => {
  // Lógica para ler os dados de um veículo específico
});

router.put('/veiculos/:id', (req, res) => {
  // Lógica para atualizar os dados de um veículo específico
});

router.delete('/veiculos/:id', (req, res) => {
  // Lógica para excluir um veículo específico
});

export default router;
