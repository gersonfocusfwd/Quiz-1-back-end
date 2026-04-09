import Empresa from './clases/Empresa.js';
import Departamento from './clases/Departamento.js';
import Empleado from './clases/Empleado.js';

// Instancia principal
let miEmpresa = new Empresa("mortadela con cebolla");

// Función para guardar en LocalStorage
const guardarEnLocal = () => {
    // Guardamos el estado actual de la instancia
    localStorage.setItem('datosEmpresa', JSON.stringify(miEmpresa));
};

// Función para cargar datos
const cargarDesdeLocal = () => {
    const datosRaw = localStorage.getItem('datosEmpresa');
    if (datosRaw) {
        const objetoJS = JSON.parse(datosRaw);
        
        // Sincronizamos el nombre
        miEmpresa.nombre = objetoJS.nombre;
        
        // Re-mapeamos los datos a objetos reales de clase
        objetoJS.listaDepartamentos.forEach(depData => {
            const nuevoDep = new Departamento(depData.nombre);
            depData.listaEmpleados.forEach(empData => {
                // Metemos los empleados como objetos reales
                nuevoDep.agregarEmpleado(new Empleado(empData.nombre, empData.puesto));
            });
            miEmpresa.agregarDepartamento(nuevoDep);
        });
    }
};

// --- FUNCIONES DE INTERFAZ ---

const crearDepartamento = () => {
    const nombreDep = prompt("Nombre del departamento:");
    if (nombreDep) {
        const nuevoDep = new Departamento(nombreDep);
        miEmpresa.agregarDepartamento(nuevoDep);
        guardarEnLocal(); // Persistencia inmediata
        console.log("Departamento echo.");
    }
};

const agregarEmpleadoADepartamento = () => {
    const nombreDep = prompt("¿A qué departamento desea entrar?");
    const depEncontrado = miEmpresa.listaDepartamentos.find(d => d.nombre === nombreDep);

    if (depEncontrado) {
        const nombreEmp = prompt("Nombre del empleado:");
        const puestoEmp = prompt("Puesto del empleado:");
        const nuevoEmp = new Empleado(nombreEmp, puestoEmp);
        
        depEncontrado.agregarEmpleado(nuevoEmp);
        guardarEnLocal(); // Persistencia inmediata
        console.log("Empleado agregado.");
    } else {
        alert("el departamento no esta");
    }
};

const mostrarEmpresaCompleta = () => {
    const info = miEmpresa.obtenerInformacionEmpresa();
    console.log(`--- Empresa: ${info.nombre} ---`);
    info.departamentos.forEach(dep => {
        console.log(`Departamento: ${dep.nombre}`);
        dep.listaEmpleados.forEach(emp => {
            // Aquí usamos el método de la clase Empleado
            console.log(`    ${emp.obtenerInfoEmpleado()}`);
        });
    });
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    cargarDesdeLocal();
    
    // Asignación de eventos  pura vida
    document.getElementById('btnCrearDep').onclick = crearDepartamento;
    document.getElementById('btnCrearEmp').onclick = agregarEmpleadoADepartamento;
    document.getElementById('btnMostrarTodo').onclick = mostrarEmpresaCompleta;
});