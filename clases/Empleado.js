class Empleado {
    constructor(nombre, puesto) {
        this.nombre = nombre;
        this.puesto = puesto;
    }

    obtenerInfoEmpleado() {
        return `Nombre: ${this.nombre} - Puesto: ${this.puesto}`;
    }
}

export default Empleado;