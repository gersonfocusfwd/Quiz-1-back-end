import Empleado from "../modelos/EmpleadoModelos.js";
import { guardar_nuevo_empleado } from "../conector.js";

// 🟢 Exportamos la función directamente
export const registrarNuevoColaborador = async (req, res) => {
    try {
        const { id, nombre, correo, puesto, salario } = req.body;

        // Uso de la herencia de tus clases POO
        const nuevoEmpleado = new Empleado(id, nombre, correo, puesto, salario);

        // Guardamos en el archivo JSON
        const resultado = await guardar_nuevo_empleado(nuevoEmpleado);

        res.json({
            mensaje: "✅ Datos recibidos y guardados en el JSON",
            empleado_creado: resultado
        });
    } catch (error) {
        res.status(500).json({ mensaje: "Error en el servidor", detalle: error.message });
    }
};