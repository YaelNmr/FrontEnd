export class Habilidad {
    id?: number;
    nombre:String;
    porcentaje:String;

    constructor(nombre:String, porcentaje:String) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }
}
