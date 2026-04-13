import express from 'express';
import { registrarNuevoColaborador } from '../controladores/EmpleadoControlador.js';
import { EmpresaControlador } from '../controladores/EmpresaControlador.js';

const router = express.Router();

// rutas para empleados
router.post('/registrar-empleado', registrarNuevoColaborador);

// Rutas para la empresa 
router.get('/ver-empresa', EmpresaControlador.obtenerDetallesEmpresa);
router.post('/configurar-empresa', EmpresaControlador.configurarEmpresaInicial);

export default router;