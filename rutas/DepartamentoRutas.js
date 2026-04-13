import express from 'express';
import { registrarDepartamento, listarDepartamentos } from '../controladores/DepartamentoControlador.js';

const router = express.Router();

// POST: /departamentos/registrar
router.post('/registrar', registrarDepartamento);

// GET: /departamentos/listar
router.get('/listar', listarDepartamentos);

export default router;
