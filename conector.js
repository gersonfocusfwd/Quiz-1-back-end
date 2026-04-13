const URL_DATA = "http://localhost:3000/empleados"; 

export const guardar_nuevo_empleado = async (empleado) => {
    try {
        const respuesta = await fetch(URL_DATA, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empleado)
        });
        return await respuesta.json();
    } catch (error) {
        console.error("Error al conectar con las datos:", error);
        //
        return empleado;
    }
};
