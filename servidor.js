import express from "express";
import rutasEmpresa from "./rutas/EmpresaRutas.js";

const app = express();

// 🟢 Configuración esencial
app.use(express.json()); // Permite recibir JSON en el body de las peticiones

// 🟢 Conectar las rutas con un prefijo estético
app.use("/api", rutasEmpresa);

const PUERTO = 3000;
app.listen(PUERTO, () => {
    console.log("=========================================");
    console.log(`api ${PUERTO}`);
    console.log(`🔗 Pruebas en Postman: http://localhost:${PUERTO}/api/ver-empresa`);
    console.log("=========================================");
});