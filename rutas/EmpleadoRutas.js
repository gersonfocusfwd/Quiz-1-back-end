import express from 'express';
import { registrarNuevoColaborador, listarEmpleados } from '../controladores/EmpleadoControlador.js';

const router = express.Router();

// POST: /empleados/registrar
router.post('/registrar', registrarNuevoColaborador);

// GET: /empleados/listar
router.get('/listar', listarEmpleados);

export default router;

