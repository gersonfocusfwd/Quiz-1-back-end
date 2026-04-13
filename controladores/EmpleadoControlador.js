import Empleado from "../modelos/EmpleadoModelos.js";
import { guardar_nuevo_empleado } from "../conector.js";

export const registrarNuevoColaborador = async (req, res) => {
    try {
        const { id, nombre, correo, puesto, salario } = req.body;


        const nuevoEmpleado = new Empleado(id, nombre, correo, puesto, salario);


        const resultado = await guardar_nuevo_empleado(nuevoEmpleado);

        res.json({
            mensaje: " Registro exitoso",
            empleado_creado: resultado
        });
    } catch (error) {
        res.status(500).json({ mensaje: "fallo", detalle: error.message });
    }
};