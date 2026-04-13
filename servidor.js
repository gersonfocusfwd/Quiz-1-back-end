import express from 'express';
import cors from 'cors';
import rutasEmpresa from './rutas/EmpresaRutas.js';
// 🟢 Importamos las de empleados
import rutasEmpleado from './rutas/EmpleadoRutas.js'; 

const app = express();
const PUERTO = 3000;

app.use(cors());
app.use(express.json());

// --- SECCIÓN DE RUTAS ---
// Conectamos las funciones de la empresa
app.use('/empresa', rutasEmpresa);

// 🟢 Conectamos las funciones de los empleados
app.use('/empleados', rutasEmpleado); 


app.listen(PUERTO, () => {
    console.log(`aquítamo: http://localhost:${PUERTO}`);
    console.log("pensando y viendo las estrellas pregunte... si en algun lugar esto se estaria repitiendo");
});