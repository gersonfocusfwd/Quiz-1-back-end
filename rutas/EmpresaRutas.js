import express from "express";
import { EmpresaControlador } from "../controladores/EmpresaControlador.js";
import { EmpleadoControlador } from "../controladores/EmpleadoControlador.js";

const router = express.Router();

// 🟢 Rutas de Empresa
router.get("/configurar-sistema", EmpresaControlador.configurarEmpresaInicial);
router.get("/ver-empresa", EmpresaControlador.obtenerDetallesEmpresa);

// 🟢 Rutas de Empleado (Para probar la HERENCIA con POST)
router.post("/registrar-colaborador", EmpleadoControlador.crearEmpleadoPrueba);

export default router;