import express from 'express';
import { EmpresaControlador } from '../controladores/EmpresaControlador.js';
import { EmpleadoControlador } from '../controladores/EmpleadoControlador.js';

const router = express.Router();

// --- RUTAS PARA LA EMPRESA ---
router.get('/configurar', EmpresaControlador.configurarEmpresaInicial);
router.get('/ver-empresa', EmpresaControlador.obtenerDetallesEmpresa);

// --- RUTA PARA EMPLEADOS ---
// 🟢 Aquí corregimos el nombre para que calce con tu controlador
router.post('/registrar-empleado', EmpleadoControlador.registrarNuevoColaborador);

export default router;