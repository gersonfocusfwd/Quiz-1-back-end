class Departamento {
    constructor(id, nombreDepartamento) {
        this.id = id;
        this.nombreDepartamento = nombreDepartamento;
        this.listaEmpleados = [];
    }

    agregarEmpleado(empleado) {
        this.listaEmpleados.push(empleado);
    }
}

export default Departamento;