import Persona from "./PersonaModelos.js";

class Empleado extends Persona {
    
    constructor(id, nombre, correo, puesto, salario) {
        // 'super' pasa los datos al constructor de Persona
        super(id, nombre, correo);
        this.puesto = puesto;
        this.salario = salario;
    }

    obtenerDetalles() {
        return `Colaborador: ${this.nombre} | Puesto: ${this.puesto}`;
    }
}

export default Empleado;