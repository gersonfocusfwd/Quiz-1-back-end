class Empresa {
    constructor(nombre) {
        this.nombre = nombre;
        this.listaDepartamentos = [];
    }

    agregarDepartamento(departamento) {
        this.listaDepartamentos.push(departamento);
    }

    obtenerInformacionEmpresa() {
        return {
            nombre: this.nombre,
            departamentos: this.listaDepartamentos
        };
    }
}

export default Empresa;