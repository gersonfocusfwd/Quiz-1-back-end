import express from 'express';
import cors from 'cors';
import rutasEmpresa from './rutas/EmpresaRutas.js';

const app = express();
const PUERTO = 3000;

app.use(cors());
app.use(express.json());

//  conectamos rutas
app.use('/api', rutasEmpresa);

app.listen(PUERTO, () => {

    console.log(` aquitamo: http://localhost:${PUERTO}`);
    console.log("pensando y viendo las estrellas pregunte... si en algun lugar esto se estaria repitiendo");

});