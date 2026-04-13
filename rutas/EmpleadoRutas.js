import express from 'express';
import { registrarNuevoColaborador, listarEmpleados } from '../controladores/EmpleadoControlador.js';

const router = express.Router();

// Ruta para registrar un nuevo empleado
// POST: /empleados/registrar
router.post('/registrar', registrarNuevoColaborador);

// Ruta para ver todos los empleados
// GET: /empleados/listar
router.get('/listar', listarEmpleados);

export default router;

