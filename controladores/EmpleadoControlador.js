import Empleado from "../modelos/EmpleadoModelos.js";

const crearEmpleadoPrueba = (req, res) => {
    // Simulamos que recibimos datos de Postman (req.body)
    const { id, nombre, correo, puesto, salario } = req.body;

    // Instanciamos la clase que usa herencia de Persona
    const colaborador = new Empleado(id, nombre, correo, puesto, salario);

    res.json({
        mensaje: "Empleado instanciado correctamente con POO",
        objetoCompleto: colaborador,
        detalleCientifico: colaborador.obtenerDetalles()
    });
};

export const EmpleadoControlador = {
    crearEmpleadoPrueba
};