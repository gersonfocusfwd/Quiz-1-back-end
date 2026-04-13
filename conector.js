const URL_DATA = "http://localhost:3001/empleados"; 

// Guardar un nuevo empleado
export const guardar_nuevo_empleado = async (empleado) => {
    const respuesta = await fetch(URL_DATA, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(empleado)
    });

    if (!respuesta.ok) {
        throw new Error(`Error en el servidor de datos: ${respuesta.statusText}`);
    }

    return await respuesta.json();
};

// Obtener todos los empleados de la base de datos
export const obtener_todos_los_empleados = async () => {
    const respuesta = await fetch(URL_DATA);
    
    if (!respuesta.ok) {
        throw new Error("No se pudo conectar con la base de datos");
    }

    return await respuesta.json();
};

