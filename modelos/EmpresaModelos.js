class Empresa {
    constructor(nombreEmpresa, cedulaJuridica) {
        this.nombreEmpresa = nombreEmpresa;
        this.cedulaJuridica = cedulaJuridica;
        this.departamentos = [];
    }

    registrarDepartamento(departamento) {
        this.departamentos.push(departamento);
    }

    obtenerEstructuraCompleta() {
        return {
            empresa: this.nombreEmpresa,
            totalDepartamentos: this.departamentos.length,
            datos: this.departamentos
        };
    }
}

export default Empresa;