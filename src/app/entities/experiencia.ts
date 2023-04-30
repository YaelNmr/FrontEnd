export class Experiencia {
      id?:number;
      nombre:String;
      puesto:String;  
      inicioyFin:String;
      imagen:String;
      descripcion:String;
     
      constructor (nombre:String, puesto:String, inicioyFin:String, imagen:String, descripcion:String) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.inicioyFin = inicioyFin;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}
