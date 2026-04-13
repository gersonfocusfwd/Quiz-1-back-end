import express from 'express';
import { EmpresaControlador } from '../controladores/EmpresaControlador.js';

const router = express.Router();

// Rutas para la empresa 
router.get('/ver-empresa', EmpresaControlador.obtenerDetallesEmpresa);
router.post('/configurar-empresa', EmpresaControlador.configurarEmpresaInicial);

export default router;