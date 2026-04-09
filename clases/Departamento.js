import Empleado from './Empleado.js';

class Departamento {
    constructor(nombre) {
        this.nombre = nombre;
        this.listaEmpleados = [];
    }

    agregarEmpleado(empleado) {
        this.listaEmpleados.push(empleado);
    }

    obtenerEmpleados() {
        return this.listaEmpleados;
    }
}

export default Departamento;