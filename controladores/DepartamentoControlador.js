import Departamento from "../modelos/DepartamentoModelos.js";
import { guardar_nuevo_departamento, obtener_todos_los_departamentos } from "../conector.js";

export const registrarDepartamento = async (req, res) => {
    try {
        const { id, nombreDepartamento } = req.body;

        if (!id || !nombreDepartamento) {
            return res.status(400).json({ 
                mensaje: "Solicitud fallida", 
                detalle: "Todos los campos son obligatorios (id, nombreDepartamento)" 
            });
        }

        const nuevoDepartamento = new Departamento(id, nombreDepartamento);
        const resultado = await guardar_nuevo_departamento(nuevoDepartamento);

        res.status(201).json({
            mensaje: "¡Departamento registrado con éxito!",
            departamento_creado: resultado
        });
    } catch (error) {
        console.error("Error en registrarDepartamento:", error.message);
        res.status(500).json({ 
            mensaje: "No se pudo guardar el departamento", 
            detalle: "Asegúrate de que el servidor de datos esté ejecutándose." 
        });
    }
};

export const listarDepartamentos = async (req, res) => {
    try {
        const departamentos = await obtener_todos_los_departamentos();
        res.json({
            mensaje: "Lista de departamentos recuperada",
            cantidad: departamentos.length,
            datos: departamentos
        });
    } catch (error) {
        res.status(500).json({ 
            mensaje: "Error al recuperar departamentos", 
            detalle: error.message 
        });
    }
};
