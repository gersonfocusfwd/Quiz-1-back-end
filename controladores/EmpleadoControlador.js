import Empleado from "../modelos/EmpleadoModelos.js";
import { guardar_nuevo_empleado, obtener_todos_los_empleados } from "../conector.js";

// Lógica para registrar un nuevo empleado
export const registrarNuevoColaborador = async (req, res) => {
    try {
        const { id, nombre, correo, puesto, salario } = req.body;

        // Validación básica
        if (!id || !nombre || !correo || !puesto || !salario) {
            return res.status(400).json({ 
                mensaje: "Solicitud fallida", 
                detalle: "Todos los campos son obligatorios (id, nombre, correo, puesto, salario)" 
            });
        }

        const nuevoEmpleado = new Empleado(id, nombre, correo, puesto, salario);
        const resultado = await guardar_nuevo_empleado(nuevoEmpleado);

        res.status(201).json({
            mensaje: "¡Registro exitoso!",
            empleado_creado: resultado
        });
    } catch (error) {
        console.error("Error en registrarNuevoColaborador:", error.message);
        res.status(500).json({ 
            mensaje: "No se pudo guardar el empleado", 
            detalle: "Asegúrate de que el comando 'npm run db' esté ejecutándose." 
        });
    }
};

// Lógica para obtener todos los empleados
export const listarEmpleados = async (req, res) => {
    try {
        const empleados = await obtener_todos_los_empleados();
        res.json({
            mensaje: "Lista de empleados recuperada",
            cantidad: empleados.length,
            datos: empleados
        });
    } catch (error) {
        res.status(500).json({ 
            mensaje: "Error al recuperar empleados", 
            detalle: error.message 
        });
    }
};