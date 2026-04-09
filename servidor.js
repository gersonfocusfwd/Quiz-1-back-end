import express from 'express';
import rutasEmpresa from './rutas/EmpresaRutas.js';

const app = express();

// 🟢 CONFIGURACIÓN PARA RECIBIR DATOS (El famoso Body)
app.use(express.json());

// 🟢 CONEXIÓN DE RUTAS
app.use('/api', rutasEmpresa);

const PUERTO = 3000;
app.listen(PUERTO, () => {
    console.log("=========================================");
    console.log(`🚀 API DE DESARROLLO CORRIENDO EN EL PUERTO ${PUERTO}`);
    console.log(`🔗 Pruebas en Postman: http://localhost:${PUERTO}/api/ver-empresa`);
    console.log("=========================================");
});