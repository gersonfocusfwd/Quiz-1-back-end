import express from 'express';
import { registrarNuevoColaborador } from '../controladores/EmpleadoControlador.js';

const router = express.Router();

// Ruta para registrar un nuevo empleado
// El path completo será: /empleados/registrar
router.post('/registrar', registrarNuevoColaborador);

export default router;
