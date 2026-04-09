import express from 'express';
import rutasEmpresa from './rutas/EmpresaRutas.js';

const app = express();

app.use(express.json());

app.use('/api', rutasEmpresa);

const PUERTO = 3000;
app.listen(PUERTO, () => {
    console.log("=========================================");
    console.log(`API ${PUERTO}`);
    console.log(` Pruebas en Postman: http://localhost:${PUERTO}/api/ver-empresa`);
    console.log("=========================================");
});