export class Experiencia {
      id?:number;
      nombre:String;
      puesto:String;  
      inicioyFin:String;
      imagen:String;
      descripcion:String;
      //personaid:number; <-- esto es la clave foranea, la dejo comentada por si la necesito mas adelante

      constructor (nombre:String, puesto:String, inicioyFin:String, imagen:String, descripcion:String) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.inicioyFin = inicioyFin;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}
