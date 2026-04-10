const URL_API = "http://localhost:3000";

// 🟢 Función para obtener todos los empleados
export const obtener_empleados = async () => {
    const respuesta = await fetch(`${URL_API}/empleados`);
    return await respuesta.json();
};

// 🟢 Función para guardar un nuevo empleado (el que creás con tu clase Empleado)
export const guardar_nuevo_empleado = async (empleado) => {
    const respuesta = await fetch(`${URL_API}/empleados`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(empleado)
    });
    return await respuesta.json();
};

// 🟢 Función para guardar empresa
export const guardar_empresa = async (empresa) => {
    const respuesta = await fetch(`${URL_API}/empresas`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(empresa)
    });
    return await respuesta.json();
};