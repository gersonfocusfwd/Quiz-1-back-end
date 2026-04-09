import Empresa from "../modelos/EmpresaModelos.js";
import Departamento from "../modelos/DepartamentoModelos.js";
import Empleado from "../modelos/EmpleadoModelos.js";

// Instanciamos la empresa principal
const miEmpresa = new Empresa("Gerson Dev Solutions", "3-101-123456");

const obtenerDetallesEmpresa = (req, res) => {
    // Usamos los métodos de la clase Empresa
    const respuesta = miEmpresa.obtenerEstructuraCompleta();
    
    res.json({
        mensaje: "Estructura de la empresa recuperada",
        datos: respuesta
    });
};

const configurarEmpresaInicial = (req, res) => {
    // 1. Creamos un departamento
    const deptoTI = new Departamento(1, "Tecnologías de Información");

    // 2. Creamos un empleado (Usando HERENCIA)
    const nuevoEmpleado = new Empleado(
        202, 
        "Gerson", 
        "gerson@focusfwd.com", 
        "Fullstack Developer", 
        3000
    );

    // 3. Los unimos
    deptoTI.agregarEmpleado(nuevoEmpleado);
    miEmpresa.registrarDepartamento(deptoTI);

    res.json({
        mensaje: "Empresa configurada con éxito para el Quiz",
        empleadoCreado: nuevoEmpleado.obtenerDetalles()
    });
};

export const EmpresaControlador = {
    obtenerDetallesEmpresa,
    configurarEmpresaInicial
};