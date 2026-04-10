import express from 'express';
// 🟢 Importamos la función específica y NO OLVIDÉS el .js al final
import { registrarNuevoColaborador } from '../controladores/EmpleadoControlador.js';

const router = express.Router();

// Ruta para que probés en Postman
router.post('/registrar-empleado', registrarNuevoColaborador);

export default router;