const URL_BASE = "http://localhost:3001";
const URL_EMPLEADOS = `${URL_BASE}/empleados`; 
const URL_DEPARTAMENTOS = `${URL_BASE}/departamentos`;

// --- EMPLEADOS ---

// Guardar un nuevo empleado
export const guardar_nuevo_empleado = async (empleado) => {
    const respuesta = await fetch(URL_EMPLEADOS, {
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
    const respuesta = await fetch(URL_EMPLEADOS);
    
    if (!respuesta.ok) {
        throw new Error("No se pudo conectar con la base de datos");
    }

    return await respuesta.json();
};

// --- DEPARTAMENTOS ---

// Guardar un nuevo departamento
export const guardar_nuevo_departamento = async (departamento) => {
    const respuesta = await fetch(URL_DEPARTAMENTOS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(departamento)
    });

    if (!respuesta.ok) {
        throw new Error(`Error en el servidor de datos: ${respuesta.statusText}`);
    }

    return await respuesta.json();
};

// Obtener todos los departamentos de la base de datos
export const obtener_todos_los_departamentos = async () => {
    const respuesta = await fetch(URL_DEPARTAMENTOS);
    
    if (!respuesta.ok) {
        throw new Error("No se pudo conectar con la base de datos");
    }

    return await respuesta.json();
};

