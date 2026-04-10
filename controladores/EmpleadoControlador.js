import Empleado from "../modelos/EmpleadoModelos.js";
import { guardar_nuevo_empleado } from "../conector.js"; // 

export const registrarNuevoColaborador = async (req, res) => {
    try {
        const { id, nombre, correo, puesto, salario } = req.body;

        // 🟢 Creamos la instancia con tu clase POO (¡Herencia al poder!)
        const nuevoEmpleado = new Empleado(id, nombre, correo, puesto, salario);

        // 🟢 Guardamos en el JSON Server a través del conector
        const resultado = await guardar_nuevo_empleado(nuevoEmpleado);

        res.json({
            mensaje: " trabajador puesto",
            datos: resultado
        });
        
    } catch (error) {
        res.status(500).json({ mensaje: "Error al guardar", detalle: error.message });
    }
};