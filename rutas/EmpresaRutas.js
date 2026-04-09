import express from 'express';
import { EmpresaControlador } from '../controladores/EmpresaControlador.js';
import { EmpleadoControlador } from '../controladores/EmpleadoControlador.js';

const router = express.Router();

// empresa rutas
router.get('/configurar', EmpresaControlador.configurarEmpresaInicial);
router.get('/ver-empresa', EmpresaControlador.obtenerDetallesEmpresa);

// ruta de los empleados
router.post('/registrar-empleado', EmpleadoControlador.registrarNuevoColaborador);

export default router;