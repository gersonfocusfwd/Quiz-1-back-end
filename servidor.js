import express from 'express';
import cors from 'cors';
import rutasEmpresa from './rutas/EmpresaRutas.js';
import rutasEmpleado from './rutas/EmpleadoRutas.js'; 
import rutasDepartamento from './rutas/DepartamentoRutas.js';

const app = express();
const PUERTO = 3000;

app.use(cors());
app.use(express.json());

app.use('/empresa', rutasEmpresa);
app.use('/empleados', rutasEmpleado); 
app.use('/departamentos', rutasDepartamento);


app.listen(PUERTO, () => {
    console.log(`aquítamo: http://localhost:${PUERTO}`);
    console.log("pensando y viendo las estrellas pregunte... si en algun lugar esto se estaria repitiendo");
});