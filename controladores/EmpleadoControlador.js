import Empleado from "../modelos/EmpleadoModelos.js";

const registrarNuevoColaborador = (req, res) => {
    const { id, nombre, correo, puesto, salario } = req.body;

    // uso de la herencia
    const nuevoEmpleado = new Empleado(id, nombre, correo, puesto, salario);

    res.json({
        mensaje: "¡Datos recibidos en el Body del API!",
        empleado: nuevoEmpleado,
        confirmacion: nuevoEmpleado.obtenerDetalles()
    });
};

export const EmpleadoControlador = {
    registrarNuevoColaborador
};