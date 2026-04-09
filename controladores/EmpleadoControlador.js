import Empleado from "../modelos/EmpleadoModelos.js";

const registrarNuevoColaborador = (req, res) => {
    // Extraemos la información del "Body" (lo que vos llamabas JB)
    const { id, nombre, correo, puesto, salario } = req.body;

    // Usamos nuestra clase con HERENCIA
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